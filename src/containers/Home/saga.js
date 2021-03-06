import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_CURRENT_DATA,
  FETCH_CURRENT_DATA_SUCCESS,
} from './actions';
import { unAuthAxios, getDataByCountry, latestStatByCountry } from '../../networking';
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
    let firstTotalCases = parseInt(
      accumulator[accumulator.length - 1].total_cases.replace(/,/g, ''),
    );
    for (let index = accumulator.length - 2; index > -1; index--) {
      const record = accumulator[index];
      let nthTotalCases = parseInt(record.total_cases.replace(/,/g, ''));
      let logDifference = Math.log(nthTotalCases) - Math.log(firstTotalCases);
      // eslint-disable-next-line
    let logDiffByX = logDifference / ((accumulator.length - 1) - index);
      let r = Math.exp(logDiffByX) - 1;
      rAccumulator.push(r);
    }
    let meanR = average(rAccumulator);
    Array.from({ length: 8 }, (_, i) => {
      let prediction = firstTotalCases * Math.pow(1 + meanR, i + accumulator.length);
      predictionAccumulator.push({ y: Math.ceil(prediction), x: getNthDay(i) });
      return null;
    });
    let lastWeekRecord = accumulator.map(record => {
      return {
        y: parseInt(record.total_cases.replace(/,/g, '')),
        x: moment(record.record_date, 'YYYY-MM-DD'),
      };
    });
    let lastWeekGraphData = lastWeekRecord.reverse();
    let nextWeekGraphData = predictionAccumulator.slice(0);
    nextWeekGraphData.unshift(lastWeekRecord[lastWeekRecord.length - 1]);
    console.log(rAccumulator);
    console.log(`Mean R: ${meanR}`);
    yield put({
      type: FETCH_DATA_SUCCESS,
      payload: {
        lastWeekData: lastWeekRecord,
        nextWeekPredictions: predictionAccumulator,
        lastWeekGraphData: lastWeekGraphData,
        nextWeekGraphData: nextWeekGraphData,
        is_loading: false,
      },
    });
  } catch (error) {
    yield put({
      type: FETCH_DATA_FAILURE,
      payload: {
        is_loading: false,
        message: 'Something went wrong, please refresh.',
      },
    });
  }
}

function* fetchCurrentData(action) {
  try {
    let todayDataResponse = yield call(unAuthAxios, 'get', latestStatByCountry, {
      country: action.payload.country,
    });

    let currentRecord = todayDataResponse.data.latest_stat_by_country[0];
    yield put({
      type: FETCH_CURRENT_DATA_SUCCESS,
      payload: {
        currentTotalCases: currentRecord.total_cases,
        currentRecoveredCases: currentRecord.total_recovered,
        currentDeceasedCases: currentRecord.total_deaths,
      },
    });
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
