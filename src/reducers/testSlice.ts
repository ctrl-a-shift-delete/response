import { createSlice } from '@reduxjs/toolkit'

const testSlice = createSlice({
  name: 'test',
  initialState: {
    text: '',
  },
  reducers: {
    testAction(state?) {
      state.text = `test ${Math.random()}`
    },
  },
})

export const { testAction } = testSlice.actions

export default testSlice.reducer
