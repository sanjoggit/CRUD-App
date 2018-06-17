import {ADD_NEW_USER, DELETE_USER, SAVE_EDITED_USER} from './constant.js';
const uuid4 = require('uuid/v4');

export const addUser = (user)=>{

  return {
    type: ADD_NEW_USER,
    //payload: user                   //without id
    payload: {id: uuid4() , ...user} //with id
  }
}

export const deleteUser = (i)=>{
  return{
    type: DELETE_USER,
    payload: i
  }
}

export const saveEditedUser = (user)=>{
  return{
    type: SAVE_EDITED_USER,
    payload: user
  }
}
