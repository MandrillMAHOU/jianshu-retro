import React, {Component} from 'react';
import {connect} from 'react-redux';

import {AuthorWrapper, AuthorTitle, AuthorList, AuthorItem, AuthorImg, AuthorInfo, Follow, MoreAuthor} from '../homeStyle';

class Author extends Component {
  render() {
    return (
      <AuthorWrapper>
        <AuthorTitle>推荐作者</AuthorTitle>
        <AuthorList>
          {
            this.props.list.map((item, index)=>{
              return (
                <AuthorItem key={item.get('id')}>
                  <AuthorImg src={item.get('imgUrl')} alt={item.get('name')}/>
                  <AuthorInfo>{item.get('name')}</AuthorInfo>
                  <Follow><span>+</span>关注</Follow>
                </AuthorItem>
              )
            })
          }
        </AuthorList>
        <MoreAuthor>查看全部 ></MoreAuthor>
      </AuthorWrapper>
    )
  }
}

const mapState = (state)=>{
  return {
    list: state.getIn(['home', 'authorList'])
  }
}

export default connect(mapState, null)(Author);