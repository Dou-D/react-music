import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})

type GetStateFn = typeof store.getState
export type IRootState = ReturnType<GetStateFn>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

type DispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<DispatchType>()
export default store
