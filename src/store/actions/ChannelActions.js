import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND_URL;
const Auth = {
    headers: {
        authorization: localStorage.getItem('token')
    }
}

// ----------------------- GET CHANNELS -----------------------

export const FETCH_CHANNELS_START = "FETCH_CHANNELS_START";
export const FETCH_CHANNELS_SUCCESS = "FETCH_CHANNELS_SUCCESS";
export const FETCH_CHANNELS_FAILURE = "FETCH_CHANNELS_FAILURE";

export const fetchChannels = () => dispatch => {
    dispatch({ type: FETCH_CHANNELS_START })
    axios
        .get(`${URL}/api/channels`)
        .then(res => dispatch({ type: FETCH_CHANNELS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_CHANNELS_FAILURE, payload: err }))
}

// ----------------------- ADD CHANNEL -----------------------

export const ADD_CHANNEL_START = "ADD_CHANNEL_START"; 
export const ADD_CHANNEL_SUCCESS = "ADD_CHANNEL_SUCCESS"; 
export const ADD_CHANNEL_FAILURE = "ADD_CHANNEL_FAILURE"; 

export const addChannel = (channel, closeModal) => dispatch => {
    dispatch({ type: ADD_CHANNEL_START })
    axios
        .post(`${URL}/api/channels`, channel, Auth)
        .then(res => {
            dispatch({ type: ADD_CHANNEL_SUCCESS, payload: res.data })
            closeModal();
        })
        .then(() => fetchChannels())
        .catch(err => dispatch({ type: ADD_CHANNEL_FAILURE, payload: err }))
}

// ----------------------- REMOVE CHANNEL -----------------------

export const REMOVE_CHANNEL_START = "REMOVE_CHANNEL_START"; 
export const REMOVE_CHANNEL_SUCCESS = "REMOVE_CHANNEL_SUCCESS"; 
export const REMOVE_CHANNEL_FAILURE = "REMOVE_CHANNEL_FAILURE"; 

export const removeChannel = id => dispatch => {
    dispatch({ type: REMOVE_CHANNEL_START })
    axios
        .delete(`${URL}/api/channels/${id}`, Auth)
        .then(res => dispatch({ type: REMOVE_CHANNEL_SUCCESS, payload: res.data }))
        .then(() => fetchChannels())
        .catch(err => dispatch({ type: REMOVE_CHANNEL_FAILURE, payload: err }))
}

// ----------------------- WATCH CHANNEL -----------------------

export const START_WATCHING_CHANNEL = "START_WATCHING_CHANNEL";

export const watchChannel = channelName => ({ 
    type: START_WATCHING_CHANNEL,
    payload: channelName
})