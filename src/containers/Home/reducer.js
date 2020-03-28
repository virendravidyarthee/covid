import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_DIMENSIONS,
  SET_CROSSHAIR_VALUES,
  CLEAR_CROSSHAIR_VALUES,
  FETCH_CURRENT_DATA,
  FETCH_CURRENT_DATA_SUCCESS,
} from './actions';

const initialState = {
  lastWeek: [],
  nextWeek: [],
  lastWeekGraphData: [],
  nextWeekGraphData: [],
  height: 800,
  width: 400,
  isPredictionsLoading: true,
  isCurrenDataLoading: true,
  crosshairValues: [],
  failureMessage: '',
  currentTotalCases: null,
  currentRecoveredCases: null,
  currentDeceasedCases: null,
  didApiCallFail: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        is_loading: true,
        didApiCallFail: false,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        lastWeek: action.payload.lastWeekData,
        nextWeek: action.payload.nextWeekPredictions,
        lastWeekGraphData: action.payload.lastWeekGraphData,
        nextWeekGraphData: action.payload.nextWeekGraphData,
        isPredictionsLoading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        is_loading: false,
        failureMessage: action.payload.message,
        didApiCallFail: true,
      };
    case UPDATE_DIMENSIONS:
      return { ...state, height: action.payload.height, width: action.payload.width };
    case SET_CROSSHAIR_VALUES:
      return { ...state, crosshairValues: action.payload.values };
    case CLEAR_CROSSHAIR_VALUES:
      return { ...state, crosshairValues: [] };
    case FETCH_CURRENT_DATA:
      return {
        ...state,
        isCurrenDataLoading: true,
        didApiCallFail: false,
      };
    case FETCH_CURRENT_DATA_SUCCESS:
      return {
        ...state,
        currentTotalCases: action.payload.currentTotalCases,
        currentRecoveredCases: action.payload.currentRecoveredCases,
        currentDeceasedCases: action.payload.currentDeceasedCases,
        isCurrenDataLoading: false,
      };
    default:
      return state;
  }
}

export function getLastWeek(state) {
  return state.loginReducer.lastWeek;
}

export function getNextWeek(state) {
  return state.loginReducer.nextWeek;
}

export function getIsPredictionsLoading(state) {
  return state.loginReducer.isPredictionsLoadingoading;
}

export function getIsCurrentDataLoading(state) {
  return state.loginReducer.isCurrenDataLoading;
}

export function getLastWeekGraphData(state) {
  return state.loginReducer.lastWeekGraphData;
}

export function getNextWeekGraphData(state) {
  return state.loginReducer.nextWeekGraphData;
}

export function getWidth(state) {
  return state.loginReducer.width;
}

export function getHeight(state) {
  return state.loginReducer.height;
}

export function getCrosshairValues(state) {
  return state.loginReducer.crosshairValues;
}

export function getCurrentTotalCases(state) {
  return state.loginReducer.currentTotalCases;
}

export function getCurrentRecoveredCases(state) {
  return state.loginReducer.currentRecoveredCases;
}

export function getCurrentDeceasedCases(state) {
  return state.loginReducer.currentDeceasedCases;
}

export function getDidApiCallFail(state) {
  return state.loginReducer.didApiCallFail;
}

export function getFailureMessage(state) {
  return state.loginReducer.failureMessage;
}
