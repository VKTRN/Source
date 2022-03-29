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
    },
    addNumber: (state, action) => {
      state.value += action.payload
    }
  }
}) 

export const {add, subtract, addNumber} = countSlice.actions
export default countSlice.reducer