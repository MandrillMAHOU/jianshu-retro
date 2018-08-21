import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem} from '../homeStyle';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item)=>{
            return (
              <TopicItem key={item.get('id')}>
                <img className='topic-img' src={item.get('imgUrl')} alt={item.get('title')}/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      <a className='more-topics' href="/">更多热门专题></a>
      </TopicWrapper>
    )
  }
}

const mapState = (state)=>{
  return {
    list: state.getIn(['home','topicList'])
    // list: state.get('home').get('topicList')
  };
}

export default connect(mapState, null)(Topic);