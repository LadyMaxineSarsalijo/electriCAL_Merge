import { createSlice } from '@reduxjs/toolkit'

export const deviceSlice = createSlice({
  name: 'devices',
  initialState: {
    myDevice: [
       /* {
            image: '',
            noOfDevices: '',
            noOfHours: '',
        }*/
    ],
    token: ''
  },
  reducers: {
    mutateMyDevice: (state, actions) => {
        let temp = state.myDevice;
        temp.push(actions.payload);
        state.myDevice = temp
    },
    mutateToken: (state, actions) => {
        state.token = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { mutateMyDevice, mutateToken } = deviceSlice.actions

export default deviceSlice.reducer