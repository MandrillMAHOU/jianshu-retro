import axios from 'axios';
import {actionTypes} from './';
import {fromJS} from 'immutable';

// returns a func
export const getHomeInfo = ()=>{
  return (dispatch)=>{
    axios.get('/api/home.json')
    .then((res)=>{
      let action = initHomeInfo(res);
      dispatch(action);
    })
    .catch((e)=>{console.log(e)})
  }
}

const initHomeInfo = (res)=>{
  return {
    type: actionTypes.INIT_HOME,
    data: res.data.data
  }
}

export const getMoreList = (page)=>{
  return (dispatch)=>{
    axios.get('/api/moreList.json?' + page)
    .then((res)=>{
      let action = moreList(res, page + 1);
      // console.log(res.data.data.articleList);
      dispatch(action);
    })
    .catch((e)=>{console.log(e)})
  }
}

const moreList = (res, nextPage)=>{
  return {
    type: actionTypes.MORE_LIST,
    data: fromJS(res.data.data.articleList),
    nextPage
  }
}

export const toggleBtn = (booleanFlag)=>{
  return {
    type: actionTypes.SHOW_BTN,
    flag: booleanFlag
  }
} 