// Header component
import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {HeaderWrapper, Logo, NavBar, NavItem, NavSearch, TrendingSearch, SearchTitle, SearchSwitch, SearchList, SearchItem, Addition, NavButton, SearchWrapper} from './headerStyle';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';

class Header extends Component {
  getTrendingSearch() {
    let itemList = [];
    let jsList = this.props.list.toJS(); //convert immutable list to js list
    if (jsList.length) {
      // Math.max to test if the last page has 10 items
      for (let i = (this.props.page - 1) * 10; i < Math.min(this.props.page * 10, jsList.length); i++) {
        itemList.push(<SearchItem key={jsList[i]}>{jsList[i]}</SearchItem>);
      }
    }
    if(this.props.focus || this.props.mouseIn) {
      return (
        <TrendingSearch onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
          <SearchTitle>
            热门搜索
            <SearchSwitch onClick={()=>{this.props.handleSearchSwitch(this.props.page, this.props.totalPage, this.switchIcon)}}>
              {/* use ref to get the spin icon */}
              <i ref={(icon)=>{this.switchIcon = icon}} className="iconfont switch">&#xe851;</i>换一批
            </SearchSwitch>
          </SearchTitle>
          <SearchList>
            {itemList}
          </SearchList>
        </TrendingSearch>
      )
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <NavBar>
          <Link to='/'>
            <NavItem className="left homepage"><i className="iconfont">&#xe601;</i>&thinsp;首页</NavItem>
          </Link>
          <NavItem className="left"><i className="iconfont">&#xe6e1;</i>&thinsp;下载App</NavItem>
          {
            this.props.login ? 
            <NavItem className="right" onClick={this.props.logout}>退出</NavItem>:
            <Link to='/login'>
              <NavItem className="right">登录</NavItem>
            </Link>
          }
          <NavItem className="right">Aa</NavItem>
            <SearchWrapper>
              <CSSTransition
              in={this.props.focus}
              timeout={500}
              classNames='slide'
              >
                <NavSearch className={this.props.focus ? "focus" : ""} onFocus={()=>{this.props.handleInputFocus(this.props.list)}} onBlur={this.props.handleInputBlur}/>
              </CSSTransition>
              <i className={this.props.focus ? "focus iconfont" : "iconfont"}>&#xe631;</i>
              {this.getTrendingSearch()}
            </SearchWrapper>
        </NavBar>
        <Addition>
          <Link to='/login'>
            <NavButton className="reg">注册</NavButton>
          </Link>
          <NavButton className="post">
            <i className="iconfont">&#xe608;</i>
            &thinsp;写文章
          </NavButton>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    // focus: state.getIn(['header', 'focus']), // same with following line
    focus: state.get('header').get('focus'), // cuz state.header is now an immutable object, can be grabbed by state.header.focus
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    mouseIn: state.get('header').get('mouseIn'),
    login: state.getIn(['login','login'])
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    handleInputFocus(list) {
      if (list.size === 0) { //immutable object use size
        dispatch(actionCreators.getSearchList()); // make sure that ajax call only be sent once
      }
      dispatch(actionCreators.getSearchFocusAction());
    },
    handleInputBlur() {
      dispatch(actionCreators.getSearchBlurAction());
    },
    handleMouseEnter() {
      dispatch(actionCreators.getMouseEnterAction());
    },
    handleMouseLeave() {
      dispatch(actionCreators.getMouseLeaveAction());
    },
    handleSearchSwitch(page, totalPage, spinicon) {
      // console.log(spinicon);
      if (spinicon.style.transform === "") {
        spinicon.style.transform = 'rotate(360deg)';
      } else {
        spinicon.style.transform = 'rotate(' + (parseInt(spinicon.style.transform.substr(7, 3), 10) + 360) + 'deg)';
      }
      if (page < totalPage) {
        dispatch(actionCreators.getChangePageAction(page + 1));
      } else {
        dispatch(actionCreators.getChangePageAction(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);