import { createSlice, createSelector } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: false
    
  },
  reducers: {
    setLogin: (state, action) =>{
        state.login = action.payload
    }
     
  },
})





// Action creators are generated for each case reducer function
export const { setLogin} = userSlice.actions

export default userSlice.reducer