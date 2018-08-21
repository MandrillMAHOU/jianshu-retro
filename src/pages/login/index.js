import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {LoginPage, LoginWrapper, InputWrapper, Input, SubmitBtn} from './loginStyle';
import {actionCreators} from './store';

class Login extends Component {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginPage>
          <LoginWrapper>
            <h1>登录</h1>
            <form action=""></form>
            <InputWrapper>
              <i className="iconfont">&#xe7ae;</i>
              {/* use innerRef instead of ref!!!!!! cause use styled-component, use ref will get the styled component, not the real dom */}
              <Input placeholder="账号" innerRef={(input)=>{this.account = input}}/> 
            </InputWrapper>
            <InputWrapper>
              <i className="iconfont">&#xe627;</i>
              <Input type="password" placeholder="密码" innerRef={(input)=>{this.password = input}}/>
            </InputWrapper>
            <SubmitBtn onClick={()=>{this.props.login(this.account, this.password)}}>登录</SubmitBtn>
          </LoginWrapper> 
        </LoginPage>
      )
    } else {
      return <Redirect to='/'/> // if logined, return to homepage
    }
  }
}

const mapState = (state)=>{
  return {
    loginStatus: state.getIn(['login','login'])
  }
}

const mapDispatch = (dispatch)=>{
  return {
    login(accountEle, passwordEle) {
      dispatch(actionCreators.login(accountEle.value, passwordEle.value));
    }
  }
}


export default connect(mapState, mapDispatch)(Login);