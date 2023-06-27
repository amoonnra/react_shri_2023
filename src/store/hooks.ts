import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppShallowSelector: TypedUseSelectorHook<RootState> = (selector) => useSelector(selector, shallowEqual)