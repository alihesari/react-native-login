import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_ATTEMPT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
      break;
    
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
      break;

    case USER_LOGIN_ATTEMPT:
      return { ...state, loading: true }
      break;
    
    case USER_LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE }
      break;

    case USER_LOGIN_FAIL:
      return { ...state, loading: false, password: '' }
      break;
  
    default:
      return state;
      break;
  }
}