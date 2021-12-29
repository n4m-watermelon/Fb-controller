import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isLogin: localStorage.getItem('isLogin') || false,
    fbPageAccessToken:null,
    fbUserAccessToken:null,
    counter:0
  }

  export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      onLogin: (state, {payload} ) => {
        state.isLogin = true
        state.fbUserAccessToken = payload

      },
      onLogout: (state) => {
        state.isLogin = false
        state.fbUserAccessToken = null
      },
      onCounter (state){
        state.counter += 1
      }

    },
  })

export const { onLogin, onLogout, onCounter } = loginSlice.actions

export default loginSlice.reducer
