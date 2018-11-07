import { GetView, GetEnterpriseEvaluation } from '../../../API';
import { DATA_SUCCESS, DATA_FAILURE, FETCHING_DATA } from '../contants';

const getSuccessView = data => {
  return {
    type: DATA_SUCCESS.VIEW,
    data,
  };
};
const getSuccessEv = data => {
  return {
    type: DATA_SUCCESS.EV,
    data,
  };
};
const getFailure = error => {
  return {
    type: DATA_FAILURE,
    error,
  };
};

export const _GetView = data => dispatch => {
  dispatch({ type: FETCHING_DATA });
  GetView(data)
    .then(response => {
      response.data.success
        ? dispatch(getSuccessView(response.data.data))
        : dispatch(getFailure(response.data));
    })
    .catch(err => dispatch(getFailure(err)));
};

export const _GetEnterpriseEvaluation = data => dispatch => {
  dispatch({ type: FETCHING_DATA });
  GetEnterpriseEvaluation(data)
    .then(response => {
      response.data.success
        ? dispatch(getSuccessEv(response.data.data))
        : dispatch(getFailure(response.data));
    })
    .catch(err => dispatch(getFailure(err)));
};
