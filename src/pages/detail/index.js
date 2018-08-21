// Detail component
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {DetailWrapper, ArticleTitle, ArticleContent} from './detailStyle';
import {actionCreators} from './store';

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <ArticleTitle>{this.props.title}</ArticleTitle>
        <ArticleContent dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
    window.scrollTo(0, 0);
  }
}

const mapState = (state)=>{
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = (dispatch)=>{
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id));
    }
  }
}


export default connect(mapState, mapDispatch)(Detail);