import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        count: 10,
        name: 'hhh',
        token: '',
    },
    reducers: {
        useSetting(state, { payload }) {
            state.token = payload;
        }
    }
})

export const { useSetting } = userSlice.actions
export default userSlice.reducer
