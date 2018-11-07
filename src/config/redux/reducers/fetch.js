import { FETCHING_DATA, DATA_SUCCESS, DATA_FAILURE } from '../contants';

const initialState = {
  getSuccessView: {},
  getSuccessEv: {},
  isFetching: false,
  error: false,
};

export const Fetch = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case DATA_SUCCESS.VIEW:
      return {
        ...state,
        getSuccessView: action.data,
        isFetching: false,
        error: false,
      };
    case DATA_SUCCESS.EV:
      return {
        ...state,
        getSuccessEv: action.data,
        isFetching: false,
        error: false,
      };

    case DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};
