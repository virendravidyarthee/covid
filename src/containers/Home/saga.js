import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_CURRENT_DATA,
  FETCH_CURRENT_DATA_SUCCESS,
} from './actions';
import { unAuthAxios, getDataByCountryAndDate, getDataByCountry } from '../../networking';
import { getNthDay } from '../../utils';
import moment from 'moment';

function* fetchData(action) {
  try {
    let accumulator = [];
    var predictionAccumulator = [];
    let rAccumulator = [];
    let recordToAddToAccumulator = null;
    let { data: countryResponse } = yield call(unAuthAxios, 'get', getDataByCountry, {
      country: action.payload.country,
    });
    countryResponse.stat_by_country.forEach((record, index, array) => {
      if (index + 1 < array.length) {
        let nextRecord = array[index + 1];
        let currentRecordMoment = moment(record.record_date);
        let nextRecordMoment = moment(nextRecord.record_date);
        if (!nextRecordMoment.isSameOrBefore(currentRecordMoment, 'day')) {
          recordToAddToAccumulator = record;
        }
      } else {
        recordToAddToAccumulator = record;
      }
      if (recordToAddToAccumulator != null) {
        accumulator.push(recordToAddToAccumulator);
        recordToAddToAccumulator = null;
      }
    });
    accumulator = accumulator.reverse();
    let firstTotalCases = accumulator[accumulator.length - 1].total_cases;
    for (let index = accumulator.length - 2; index > -1; index--) {
      const record = accumulator[index];
      let nthTotalCases = record.total_cases;
      let logDifference =
        Math.log(parseInt(nthTotalCases.replace(/,/g, ''))) -
        Math.log(parseInt(firstTotalCases.replace(/,/g, '')));
      // eslint-disable-next-line
    let logDiffByX = logDifference / ((accumulator.length - 1) - index);
      let r = Math.exp(logDiffByX) - 1;
      rAccumulator.push(r);
    }
    let meanR = average(rAccumulator);
    Array.from({ length: 7 }, (_, i) => {
      let prediction = firstTotalCases * Math.pow(1 + meanR, i + accumulator.length - 1);
      predictionAccumulator.push(Math.ceil(prediction));
      return null;
    });
    predictionAccumulator = predictionAccumulator.map((element, index) => {
      return {
        total_cases: element,
        date: getNthDay(index + 1),
      };
    });
    let lastWeekRecord = accumulator.map(record => {
      return {
        total_cases: parseInt(record.total_cases.replace(/,/g, '')),
        date: moment(record.record_date, 'YYYY-MM-DD'),
      };
    });
    let graphData = lastWeekRecord.reverse().concat(predictionAccumulator);
    console.log(`Mean R: ${meanR}`);
    yield put({
      type: FETCH_DATA_SUCCESS,
      payload: {
        lastWeekData: lastWeekRecord,
        nextWeekPredictions: predictionAccumulator,
        graphData: graphData.map(data => ({
          x: data.date,
          y: data.total_cases,
        })),
        is_loading: false,
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_DATA_FAILURE,
      payload: {
        is_loading: false,
        message: 'Something went wrong, Please refresh.',
      },
    });
  }
}

function* fetchCurrentData(action) {
  try {
    let todayDataResponse = yield call(unAuthAxios, 'get', getDataByCountryAndDate, {
      country: action.payload.country,
      date: moment().format('YYYY-MM-DD'),
    });
    if (todayDataResponse.data.stat_by_country.length !== 0) {
      let currentRecord =
        todayDataResponse.data.stat_by_country[todayDataResponse.data.stat_by_country.length - 1];
      yield put({
        type: FETCH_CURRENT_DATA_SUCCESS,
        payload: {
          currentTotalCases: currentRecord.total_cases,
          currentRecoveredCases: currentRecord.total_recovered,
          currentDeceasedCases: currentRecord.total_deaths,
        },
      });
    }
  } catch (error) {
    yield put({
      type: FETCH_DATA_FAILURE,
      payload: {
        message: 'Current record loading failed. Please refresh',
      },
    });
  }
}

const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

export default function* loginSaga() {
  yield all([takeLatest(FETCH_DATA, fetchData), takeLatest(FETCH_CURRENT_DATA, fetchCurrentData)]);
}
