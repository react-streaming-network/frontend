import { combineReducers } from 'redux';

import ChannelReducer from './ChannelReducer.js'; 
import AuthReducer from './AuthReducer.js';
import ChatReducer from './ChatReducer.js';

export default combineReducers({
    ChannelReducer,
    AuthReducer,
    ChatReducer
})