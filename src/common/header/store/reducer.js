import {fromJS} from 'immutable';

import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  focus: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false // mouse stall in the trending search panel 
});

export default (state = defaultState, action)=>{
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focus', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focus', false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // return state.set('list', action.data).set('totalPage', action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
  // if (action.type === actionTypes.SEARCH_FOCUS) {
  //   return state.set('focus', true);
  // }
  // if (action.type === actionTypes.SEARCH_BLUR) {
  //   return state.set('focus', false);
  // }
  // if (action.type === actionTypes.CHANGE_LIST) {
  //   return state.set('list', action.data);
  // }
  // return state;
}