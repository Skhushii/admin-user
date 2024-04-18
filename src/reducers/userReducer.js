import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: [],
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    // Similarly handle add, update, and delete actions
    default:
      return state;
  }
};

export default userReducer;
