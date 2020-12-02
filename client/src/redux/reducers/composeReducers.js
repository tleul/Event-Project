import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import category from './category';
export default combineReducers({ auth, event, category });
