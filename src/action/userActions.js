import * as actionTypes from './actionTypes';

export const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error) => ({
  type: actionTypes.FETCH_USERS_FAILURE,
  payload: error
});


