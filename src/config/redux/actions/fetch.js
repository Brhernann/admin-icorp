import { Tasks } from '../../../API';
import { DATA_SUCCESS, DATA_FAILURE, FETCHING_DATA } from '../contants';

const getSuccess_End = data => {
  return {
    type: DATA_SUCCESS.END,
    data,
  };
};
const getSuccess_Error = data => {
  return {
    type: DATA_SUCCESS.ERROR,
    data,
  };
};
const getFailure = error => {
  return {
    type: DATA_FAILURE,
    error,
  };
};

export const task_post_end = data => dispatch => {
  dispatch({ type: FETCHING_DATA });
  Tasks(data)
    .then(response => {
      response.data.type === 'SUCCESS'
        ? dispatch(getSuccess_End(response.data.data))
        : dispatch(getFailure(response.data.message));
    })
    .catch(err => dispatch(getFailure(err)));
};

export const task_post_error = data => dispatch => {
  dispatch({ type: FETCHING_DATA });
  Tasks(data)
    .then(response => {
      response.data.type === 'SUCCESS'
        ? dispatch(getSuccess_Error(response.data.data))
        : dispatch(getFailure(response.data.message));
    })
    .catch(err => dispatch(getFailure(err)));
};
