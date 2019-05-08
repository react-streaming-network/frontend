import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND_URL;

// ------------------------ REGISTER USER ------------------------

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const registerUser = user => dispatch => {
    dispatch({ type: REGISTER_USER_START })
    axios.post(`${URL}/api/auth/register`, user)
        .then(res => dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: REGISTER_USER_FAILURE, payload: err }))
}

// ------------------------ LOGIN USER ------------------------

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const loginUser = (user, handleModal) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axios.post(`${URL}/api/auth/login`, user)
        .then(res => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data })
            handleModal();
        })
        .catch(err => dispatch({ type: LOGIN_USER_FAILURE, payload: err }))
}