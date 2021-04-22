import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import authActions from './authActions';

const initialUserstate = {name: null, email: null};

const user = createReducer(initialUserstate, {});

const token = createReducer(null, {});

const error = createReducer(null, {});

export default combineReducers({
    user,
    token,
    error,
})