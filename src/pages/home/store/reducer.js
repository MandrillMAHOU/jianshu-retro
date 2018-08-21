// reducer for Home component
import {fromJS} from 'immutable';

import {actionTypes} from './';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommandList: [],
  authorList: [],
  articlePage: 1,
  btn: false
});

export default (state = defaultState, action)=>{
  switch(action.type){
    case actionTypes.INIT_HOME:
      return state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommandList: fromJS(action.data.recommandList),
        authorList: fromJS(action.data.authorList)
      });
    case actionTypes.MORE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.data),
        articlePage: action.nextPage
      })
    case actionTypes.SHOW_BTN:
      return state.set('btn', action.flag);
    default:
      return state;
  }
}