import { combineReducers } from 'redux';

import ChannelReducer from './ChannelReducer.js'; 
import AuthReducer from './AuthReducer.js';

export default combineReducers({
    ChannelReducer,
    AuthReducer
})