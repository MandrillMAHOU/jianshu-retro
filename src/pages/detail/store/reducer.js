// reducer for Home component
import {fromJS} from 'immutable';

import {actionTypes} from './';

const defaultState = fromJS({
  title: "",
  content: ""
});

export default (state = defaultState, action)=>{
  switch(action.type){
    case actionTypes.GET_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
}