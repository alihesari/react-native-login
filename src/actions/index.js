import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_ATTEMPT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
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
    });

    fetch('http://10.0.2.2:8000/api/users/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email,
        password: password
      })
    }).then(response => {
      return response.json();
    }).then(data => {
      if(data.status === true) {
        loginUserSuccess(dispatch);
      } else {
        loginUserFail(dispatch);
      }
    }).catch(error => { console.error(error); })
  };
};

const loginUserSuccess = (dispatch) => {
  dispatch({
    type: USER_LOGIN_SUCCESS
  });
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: USER_LOGIN_FAIL
  });
};