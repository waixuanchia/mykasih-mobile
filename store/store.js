import {configureStore} from '@reduxjs/toolkit';
import authReducer from './AuthenticationSlice';

const store = configureStore({
    reducer:{
        auth:authReducer    
    }
})

export {store};