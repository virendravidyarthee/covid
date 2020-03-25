import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_DIMENSIONS,
  SET_CROSSHAIR_VALUES,
  CLEAR_CROSSHAIR_VALUES,
} from './actions';

const initialState = {
  lastWeek: [],
  nextWeek: [],
  graphData: [],
  height: 800,
  width: 400,
  is_loading: false,
  crosshairValues: [],
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        is_loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        lastWeek: action.payload.lastWeekData,
        nextWeek: action.payload.nextWeekPredictions,
        graphData: action.payload.graphData,
      };
    case FETCH_DATA_FAILURE:
      return { ...state, is_loading: false };
    case UPDATE_DIMENSIONS:
      return { ...state, height: action.payload.height, width: action.payload.width };
    case SET_CROSSHAIR_VALUES:
      return { ...state, crosshairValues: action.payload.values };
    case CLEAR_CROSSHAIR_VALUES:
      return { ...state, crosshairValues: [] };
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

export function getIsLoading(state) {
  return state.loginReducer.is_loading;
}

export function getGraphData(state) {
  return state.loginReducer.graphData;
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
