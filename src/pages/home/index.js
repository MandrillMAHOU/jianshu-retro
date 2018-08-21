// Home component
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {HomeWrapper, HomeLeft, HomeRight, BackToTop} from './homeStyle';
import Topic from './homeComponents/Topic';
import List from './homeComponents/List';
import Recommand from './homeComponents/Recommand';
import AppDownload from './homeComponents/AppDownload';
import Author from './homeComponents/Author';
import {actionCreators} from './store'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4355/90aa72980ef59c6cb49f851edc095329fb695a92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner-img"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommand />
          <AppDownload />
          <Author />
        </HomeRight>
        {
          this.props.btn ? <BackToTop onClick = {this.backToTop}>回到顶部</BackToTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.initHomeData();
    window.addEventListener('scroll', this.props.showBtn); // when scroll page, test if show the back to top btn
  }

  backToTop() {
    window.scrollTo(0, 0);
  }
}

const mapState = (state)=>{
  return {
    btn: state.getIn(['home','btn'])
  }
}

const mapDispatch = (dispatch)=>{
  return {
    initHomeData() {
      dispatch(actionCreators.getHomeInfo());
    },
    // shows or hides the back to top btn
    showBtn() {
      // let disFromTop = document.documentElement.scrollTop;
      let disFromTop = window.pageYOffset;
      if (disFromTop > 0) {
        dispatch(actionCreators.toggleBtn(true));
      } else {
        dispatch(actionCreators.toggleBtn(false));
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Home);