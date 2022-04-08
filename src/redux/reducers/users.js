import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions/action';

const initialState = {
  currentUser: {},
  error: null,
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOGIN_FAILURE:
      return { ...state, error: payload };
    case LOGIN_SUCCESS:
      return { ...state, user: payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
