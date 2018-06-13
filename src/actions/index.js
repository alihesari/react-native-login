import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_ATTEMPT
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN_ATTEMPT
    })
  };
};