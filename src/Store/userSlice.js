import { createSlice, createSelector } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: false,
    user: null,
    uid: null
    
  },
  reducers: {
    setLogin: (state, action) =>{
        state.login = action.payload
    },
    setUser: (state, action) =>{
      state.user = action.payload
    },

    setUid: (state, action) =>{
      state.uid = action.payload
    }

     
  },
})





// Action creators are generated for each case reducer function
export const { setLogin, setUser, setUid} = userSlice.actions

export default userSlice.reducer