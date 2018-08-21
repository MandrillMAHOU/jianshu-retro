import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {ListItem, ListInfo, LoadMore} from '../homeStyle';
import {actionCreators} from '../store'; 

class List extends Component {
  render() {
    return (
      <Fragment>
        { 
          this.props.articleList.map((item, index)=>{
            return (
              <Link to={"/detail/" + item.get('id')}  key={index + item.get('id')}>
                <ListItem>
                  <ListInfo>
                    <h3 className="list-title">{item.get('title')}</h3>
                    <p className="list-desc">{item.get('desc')}
                    </p>
                  </ListInfo>
                  <img className={item.get('imgUrl') === "" ? "hidden":"list-img"} src={item.get('imgUrl')} alt="img"/>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={()=>{this.props.getMoreList(this.props.page)}}>更多内容</LoadMore>
      </Fragment>
    )
  }
}

const mapState = (state)=>{
  return {
    articleList: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
  }
}

const mapDispatch = (dispatch)=>{
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page));
    }
  }
}

export default connect(mapState, mapDispatch)(List);