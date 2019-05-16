import {
    GET_CHAT_START,
    GET_CHAT_SUCCESS,
    GET_CHAT_FAILURE
} from '../actions/ChatActions.js';

const initialState = {
    chat: null,
    loading: false,
}

export const ChatReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHAT_START:
            return{
                ...state,
                loading: true
            }
        case GET_CHAT_SUCCESS:
            return{
                ...state,
                chat: action.payload,
                loading: false,
            }
        case GET_CHAT_FAILURE:
            return{
                ...state,
                loading: false
            }
        default: 
            return state
    }
}

export default ChatReducer;