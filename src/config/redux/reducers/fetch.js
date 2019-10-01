import { FETCHING_DATA, DATA_SUCCESS, DATA_FAILURE } from '../contants';

const initialState = {
  getSuccessEnterprise: [],
  getSuccessPerson: [],
  getSuccessInscribed: [],
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
    case DATA_SUCCESS.ENTERPRISE:
      return {
        ...state,
        getSuccessEnterprise: action.data,
        isFetching: false,
        error: false,
      };
    case DATA_SUCCESS.PERSON:
      return {
        ...state,
        getSuccessPerson: action.data,
        isFetching: false,
        error: false,
      };
    case DATA_SUCCESS.INSCRIBED:
      return {
        ...state,
        getSuccessInscribed: action.data,
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
