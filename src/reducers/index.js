import {combineReducers} from 'redux';
import users from './reducer-users';


const allReducers = combineReducers({
  users: users
  
});

export default allReducers;
