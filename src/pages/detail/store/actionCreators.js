import axios from 'axios';

import {actionTypes} from './';

export const getDetail = (id)=>{
  return (dispatch)=>{
    axios.get('/api/detailPage.json?id=' + id)
      .then(
        (res)=>{
          let data = res.data.data;
          dispatch(getDetailAction(data));
        }
      )
      .catch((e)=>{console.log(e)});
  }
}

const getDetailAction = (data)=>{
  return {
    type: actionTypes.GET_DETAIL,
    title: data.title,
    content: data.content
  }
}