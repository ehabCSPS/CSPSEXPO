import axios from 'axios';
import { string } from 'prop-types';

export const login = (email:string,password:string):
 LoginAction => {
    return dispatch => {
      axios
        .post('http://csps-api.herokuapp.com/api/Token', {username: email,
      password:password})
        .then(response => {
          dispatch(loginSuccess(response.data));
        })
        .catch(error => {
          dispatch(loginFailed(error));
        });
    };
  };

  const loginSuccess = data => {
    return {
      type: 'LOGIN_SUCCESS',
      data,
    };
  };
  const loginFailed = error => {
    return {
      type: 'LOGIN_FAILED',
      error,
    };
  };