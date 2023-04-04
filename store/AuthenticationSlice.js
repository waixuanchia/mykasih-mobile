import {createSlice} from '@reduxjs/toolkit';

const AuthenticationSlice = createSlice({
    name:"auth",
    initialState:{
        token:null,
        userData:null,
        user_profile:null,
        didTryLogin:false
    },
    reducers:{
        authenticate:(state,action) => {
            const {payload} = action;
            
            return {
                ...state,
                token : payload.token,
                userData : payload.userData
            }
        },
        updateProfile:(state,action) => {
            const {payload} = action;
            return {
                ...state,
                user_profile:payload.user_profile
            }
        },
        setDidTryAutoLogin:(state,action) => {
            
            return {
                ...state,
                didTryLogin:true
            }
            
        },
        userLogout:(state,action) => {
            
            return {
                ...state,
                token:null,
                userData:null
            }
        }
    }

})

export const {authenticate,updateProfile,setDidTryAutoLogin,userLogout} = AuthenticationSlice.actions

export default AuthenticationSlice.reducer;