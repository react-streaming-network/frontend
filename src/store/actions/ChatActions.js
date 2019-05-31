import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND_URL;

// ----------------------- GET CHAT -----------------------

export const GET_CHAT_START = "GET_CHAT_START";
export const GET_CHAT_SUCCESS = "GET_CHAT_SUCCESS";
export const GET_CHAT_FAILURE = "GET_CHAT_FAILURE";

export const getChat = chatId => dispatch => {
    dispatch({ type: GET_CHAT_START })
    axios.get(`${URL}/api/chat/${chatId}`)
        .then(res => dispatch({ type: GET_CHAT_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_CHAT_FAILURE, payload: err}))
}