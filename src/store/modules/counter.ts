import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 10,
		name: 'hhh'
	},
	reducers: {
    ChangeCount(state, { payload }) {
      state.count += payload
      console.log(payload);

    }
  }
})

export const { ChangeCount } = counterSlice.actions
export default counterSlice.reducer
