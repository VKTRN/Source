import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: 'count',
  initialState: {
    value:0,
  },
  reducers: {
    add: (state) => {
      state.value += 1
    },
    subtract: (state) => {
      state.value -= 1
    }
  }
}) 

export const {add, subtract} = countSlice.actions
export default countSlice.reducer