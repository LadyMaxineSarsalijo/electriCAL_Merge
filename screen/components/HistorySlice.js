import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    myHistory: [],
    token: ''
  },
  reducers: {
    mutateMyHistory: (state, actions) => {
        let temp = state.myHistory;
        temp.push(actions.payload);
        state.myHistory = temp
    },
    mutateToken: (state, actions) => {
        state.token = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { mutateMyHistory, mutateToken } = historySlice.actions

export default historySlice.reducer