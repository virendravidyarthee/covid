export const FETCH_DATA = 'fetch_data';
export const FETCH_DATA_SUCCESS = 'fetch_data_success';
export const FETCH_DATA_FAILURE = 'fetch_data_failure';
export const UPDATE_DIMENSIONS = 'update_dimensions';
export const SET_CROSSHAIR_VALUES = 'set_crosshair_values';
export const CLEAR_CROSSHAIR_VALUES = 'clear_crosshair_values';
export const FETCH_CURRENT_DATA = 'get_current_data';
export const FETCH_CURRENT_DATA_SUCCESS = 'get_current_data_success';
export const FETCH_CURRENT_DATA_FAILURE = 'get_current_data_failure';

export function fetchData(country) {
  return { type: FETCH_DATA, payload: { country } };
}

export function updateDimensions(width, height) {
  return { type: UPDATE_DIMENSIONS, payload: { width, height } };
}

export function setCrosshairValues(values) {
  return { type: SET_CROSSHAIR_VALUES, payload: { values } };
}

export function clearCrosshairValues() {
  return { type: CLEAR_CROSSHAIR_VALUES, payload: {} };
}

export function getCurrentData(country) {
  return { type: FETCH_CURRENT_DATA, payload: { country } };
}
