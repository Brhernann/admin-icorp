import { FETCHING_DATA, DATA_SUCCESS, DATA_FAILURE } from '../contants';

const initialState = {
  post_terminated: {},
  post_end: {},
  post_error: {},
  isFetching: false,
  error: false,
};

export const FetchPost = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case DATA_SUCCESS.END:
      return {
        ...state,
        post_end: action.data,
        isFetching: false,
        error: false,
      };
    case DATA_SUCCESS.ERROR:
      return {
        ...state,
        post_error: action.data,
        isFetching: false,
        error: false,
      };

    case DATA_FAILURE:
      return {
        ...state,
        data: {},
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};
