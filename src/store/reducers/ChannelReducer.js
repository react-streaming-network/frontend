import { toast } from 'react-toastify';

import {
    FETCH_CHANNELS_START,
    FETCH_CHANNELS_SUCCESS,
    FETCH_CHANNELS_FAILURE,
    ADD_CHANNEL_START,
    ADD_CHANNEL_SUCCESS,
    ADD_CHANNEL_FAILURE,
    REMOVE_CHANNEL_START,
    REMOVE_CHANNEL_SUCCESS,
    REMOVE_CHANNEL_FAILURE,
    START_WATCHING_CHANNEL
} from '../actions/ChannelActions.js';

const initialState = {
    liveChannels: [],
    channels: [],
    activeChannels: [],
    loading: false
}

const ChannelReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHANNELS_START:
            return{
                ...state,
                loading: true
            }
        case FETCH_CHANNELS_SUCCESS:
            return{
                ...state,
                liveChannels: action.payload.filter(c => c.status.live).sort((a, b) => {
                    return b.status.liveStatus.concurrentViewers - a.status.liveStatus.concurrentViewers
                }),
                channels: action.payload
            }
        case FETCH_CHANNELS_FAILURE:
            return{
                ...state,
                loading: false
            }
        case ADD_CHANNEL_START:
            return{
                ...state,
                loading: true
            }
        case ADD_CHANNEL_SUCCESS:
            toast.success(action.payload.message);
            return{
                ...state,
                loading: false
            }
        case ADD_CHANNEL_FAILURE:
            toast.error("Failed to add channel")
            return{
                ...state,
                loading: false
            }
        case REMOVE_CHANNEL_START:
            return{
                ...state,
                loading: true
            }
        case REMOVE_CHANNEL_SUCCESS:
            toast.success(action.payload.message);
            return{
                ...state,
                loading: false
            }
        case REMOVE_CHANNEL_FAILURE:
            toast.error("Failed to remove channel")            
            return{
                ...state,
                loading: false
            }
        case START_WATCHING_CHANNEL:
            if(state.activeChannels.includes(action.payload)){
                if(state.activeChannels.length > 1){
                    return {
                        ...state,
                        activeChannels: state.activeChannels.filter(c => {
                            return !c.includes(action.payload);
                        })
                    }
                }
            }else{
                return {
                    ...state,
                    activeChannels: [
                        ...state.activeChannels,
                        action.payload
                    ]
                }
            }
        default:
            return state;
    }
}

export default ChannelReducer;