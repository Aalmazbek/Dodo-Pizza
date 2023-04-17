import { createSlice } from "@reduxjs/toolkit";

const authLocal = JSON.parse(localStorage.getItem('isAuth'))


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: authLocal
  },
  reducers: {
    login: (state, action) => {
      state.isAuth = action.payload
    }
  }
})


export const { login: loginAction } = authSlice.actions
export const authReducer = authSlice.reducer