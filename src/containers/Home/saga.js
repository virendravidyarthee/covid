import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';
import { unAuthAxios, getDataByCountryAndDate } from '../../networking';
import { getNthDay } from '../../utils';
import moment from 'moment';

function* fetchData(action) {
  try {
    let accumulator = [];
    var predictionAccumulator = [];
    let rAccumulator = [];
    for (let moment of action.payload.historicalDates) {
      let { data: countryHistoricalStats } = yield call(
        unAuthAxios,
        'get',
        getDataByCountryAndDate,
        {
          country: action.payload.country,
          date: moment.format('YYYY-MM-DD'),
        },
      );
      if (countryHistoricalStats.stat_by_country.length !== 0) {
        accumulator.push(
          countryHistoricalStats.stat_by_country[countryHistoricalStats.stat_by_country.length - 1],
        );
      }
    }
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
    Array.from({ length: accumulator.length - 1 }, (_, i) => {
      let prediction = firstTotalCases * Math.pow(1 + meanR, i + accumulator.length);
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
        error: 'Something went wrong, Please try again',
      },
    });
  }
}

const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

export default function* loginSaga() {
  yield takeLatest(FETCH_DATA, fetchData);
}
