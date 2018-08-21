import axios from 'axios';

import {actionTypes} from './index';

// authentication of account and pw
export const login = (account, pw)=>{
  return (dispatch)=>{
    axios.get('./api/login.json?account=' + account + "&pw=" + pw)
      .then(
        (res)=>{
          let loginStatus = res.data.data; // if login success, true, else false
          if (loginStatus) {
            dispatch(changeLogin());
          } else {
            alert('Login Fail')
          }
        }
      )
      .catch((e)=>{console.log(e)});
  }
}

const changeLogin = ()=>{
  return {
    type: actionTypes.CHANGE_LOGIN,
    value: true
  }
}

export const logout = ()=>{
  return {
    type: actionTypes.LOGOUT
  }
}