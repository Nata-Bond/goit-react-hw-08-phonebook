import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import authActions from './authActions';

const initialUserState = {name: null, email: null};

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, {payload}) => payload.user,
[authActions.loginSuccess]: (_, {payload})=> payload.user,
[authActions.logoutSuccess]: ()=> initialUserState,
[authActions.getCurrentUserSuccess]: (_, {payload})=> payload
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, {payload}) => payload.token,
    [authActions.loginSuccess]: (_, {payload}) => payload.token,
    [authActions.logoutSuccess]: ()=> null,
});

const error = createReducer(null, {
    [authActions.registerError]: (_, {payload})=>payload,
    [authActions.loginError]: (_, {payload})=>payload,
    [authActions.logoutError]: (_, {payload})=>payload,
    [authActions.getCurrentUserError]: (_, {payload})=>payload,
});


const isAuthenticated = createReducer(false, {
    [authActions.registerSuccess]: ()=> true, 
    [authActions.loginSuccess]: ()=> true,
    [authActions.getCurrentUserSuccess]: ()=> true,
    [authActions.registerError]: ()=> false,
    [authActions.loginError]: ()=> false,
    [authActions.getCurrentUserError]: ()=> false,
    [authActions.logoutSuccess]: ()=> false,
})



export default combineReducers({
    user,
    isAuthenticated,
    token,
    error,
})