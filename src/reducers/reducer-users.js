import {ADD_NEW_USER, DELETE_USER, SAVE_EDITED_USER} from '../actions/constant';

const users = (state=[], action)=>{
  switch (action.type) {
    case ADD_NEW_USER:
      return [...state, action.payload];
      //break;
    case DELETE_USER:
      return state.filter((user, index)=>index !== action.payload);
    case SAVE_EDITED_USER:
        return state.map((user)=> {
          return user.id !== action.payload.id
            ? user
            : action.payload;
      });
    default:
      return state;
  }
}

export default users;
