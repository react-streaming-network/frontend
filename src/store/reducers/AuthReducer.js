import { toast } from 'react-toastify';

import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../actions/AuthActions.js';

const initialState = {
    loading: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_USER_START:
            return{
                ...state,
                loading: true
            }
        case REGISTER_USER_SUCCESS:
            toast.success(action.payload.message);
            return{
                ...state,
                loading: false
            }
        case REGISTER_USER_FAILURE:
            toast.error("Failed To Register");                     
            return{
                ...state,
                loading: false
            }
        case LOGIN_USER_START:
            return{
                ...state,
                loading: true
            }
        case LOGIN_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('role', action.payload.role)
            toast.success(action.payload.message);
            return{
                ...state,
                loading: false
            }
        case LOGIN_USER_FAILURE:
            toast.error("Invalid Credentials");            
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default authReducer;