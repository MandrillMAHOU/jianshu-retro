import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeSearchList = (data)=>{
  return {
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10) // total pages of trending search list
  }
}

export const getSearchFocusAction = ()=>{
  return {
    type: actionTypes.SEARCH_FOCUS
  };
}

export const getSearchBlurAction = ()=>{
  return {
    type: actionTypes.SEARCH_BLUR
  };
}

export const getSearchList = ()=>{
  return (dispatch)=>{
    axios.get('/api/searchList.json')
      .then((res)=>{
        console.log('ajax call');
        let data = res.data;
        dispatch(changeSearchList(data.data));
      })
      .catch((e)=>{console.log(e);})
  }
}

export const getMouseEnterAction = ()=>{
  return {
    type: actionTypes.MOUSE_ENTER
  }
}

export const getMouseLeaveAction = ()=>{
  return {
    type: actionTypes.MOUSE_LEAVE
  }
}

export const getChangePageAction = (newPage)=>{
  return {
    type: actionTypes.CHANGE_PAGE,
    page: newPage
  }
}