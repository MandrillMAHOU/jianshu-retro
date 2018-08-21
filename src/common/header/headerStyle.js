import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height:56px;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background: #fff;
`
export const Logo = styled.div`
  height: 56px;
  width: 100px;
  margin-left: 40px;
  background: url(${logoPic});
  background-size: contain;
`

export const NavBar = styled.ul`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.li`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  margin: 0 10px;
  cursor: pointer;
  &.left {
    float: left;
    color: #333;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.homepage {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.li`
  line-height: 56px;
  float: left;
  position: relative;
  >.iconfont {
    position: absolute;
    right: 5px;
    bottom: 11px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focus {
      color: #fff;
      background-color: #aaa;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin-top: 9px;
  border: none;
  outline: none;
  padding: 0 40px 0 20px;
  border-radius: 20px;
  background-color: #eee;
  font-size: 14px;
  color: #555;
  margin-left: 20px;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width:240px;
  }
  &.slide-enter {
    transition: width 0.5s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: width 0.5s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const TrendingSearch = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #fff;
`
export const SearchTitle = styled.div`
  margin: 20px auto;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
// only block tag can transform
export const SearchSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
  .switch {
    display: inline-block;
    margin-right: 8px;
    font-size: 12px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const SearchList = styled.div`
  overflow: hidden; 
`
export const SearchItem = styled.a`
  float: left;
  display: block;
  line-height: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  color: #787878;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #555;
    border: 1px solid #666;
  }
`

export const Addition = styled.div`
  margin-right: 80px;
`
export const NavButton = styled.div`
  float: left;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 20px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149
  }
  &.post {
    color: #fff;
    background-color: #ec6149;
  } 
`