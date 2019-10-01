import { GetEnterpriseView, GetInscribed, GetPersonView } from '../../../API';
import { DATA_SUCCESS, DATA_FAILURE, FETCHING_DATA } from '../contants';

const getSuccessEnterprise = data => {
  return {
    type: DATA_SUCCESS.ENTERPRISE,
    data,
  };
};
const getSuccessPerson = data => {
  return {
    type: DATA_SUCCESS.PERSON,
    data,
  };
};
const getSuccessInscribed = data => {
  return {
    type: DATA_SUCCESS.INSCRIBED,
    data,
  };
};
const getFailure = error => {
  return {
    type: DATA_FAILURE,
    error,
  };
};

export const _GetEnterpriseView = data => dispatch => {
  dispatch({ type: FETCHING_DATA });
  GetEnterpriseView(data)
    .then(response => {
      response.data.success
        ? dispatch(getSuccessEnterprise(response.data.data))
        : dispatch(getFailure(response.data));
    })
    .catch(err => dispatch(getFailure(err)));
};

export const _GetInscribed = data => dispatch => {
  dispatch({ type: FETCHING_DATA });
  GetInscribed(data)
    .then(response => {
      response.data.success
        ? dispatch(getSuccessInscribed(response.data.data))
        : dispatch(getFailure(response.data));
    })
    .catch(err => dispatch(getFailure(err)));
};

export const _GetPersonView = data => dispatch => {
  dispatch({ type: FETCHING_DATA });
  GetPersonView(data)
    .then(response => {
      response.data.success
        ? dispatch(getSuccessPerson(response.data.data))
        : dispatch(getFailure(response.data));
    })
    .catch(err => dispatch(getFailure(err)));
};
