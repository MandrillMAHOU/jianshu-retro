import React, {Component} from 'react';
import {connect} from 'react-redux';

import {RecommandWrapper, RecommandItem} from '../homeStyle'

class Recommand extends Component {
  render() {
    return (
      <RecommandWrapper>
        {
          this.props.list.map((item)=>{
            return (
              <RecommandItem key={item.get('id')} src={item.get('src')} />
            )
          })
        }
      </RecommandWrapper>
    )
  }
}

const mapState = (state)=>{
  return {
    list: state.getIn(['home','recommandList'])
    // list: state.get('home').get('topicList')
  };
}

export default connect(mapState, null)(Recommand);