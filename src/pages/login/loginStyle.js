import styled from 'styled-components';

export const LoginPage = styled.div`
  position: absolute;
  background: #eee;
  height: 100%;
  width: 100%;
  min-height: 750px;
`
export const LoginWrapper = styled.div`
  width: 400px;
  height: 400px;
  margin: 100px auto;
  background: #fff;
  padding: 50px 50px 30px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  box-sizing: border-box;
  h1 {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    font-size: 18px;
    margin: 0 auto 50px;
    padding: 10px;
    text-align: center;
  }
`
export const InputWrapper = styled.div`
  position: relative;
  .iconfont {
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: #969696;
  }
`
export const Input = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
`

export const SubmitBtn = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  display: block;
  background: #3194d0;
  &:hover {
    background: #187cb7;
  }
`