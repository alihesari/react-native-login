import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_ATTEMPT
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
  
    default:
      return state;
      break;
  }
}