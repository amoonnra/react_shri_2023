import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IReduxState {
	name?: string
	genre?: string
	cinema?: string
}

type TPayload = PayloadAction<string | undefined>

const INITIAL_STATE: IReduxState = {}

export const filterSlice = createSlice({
	name: 'filter',
	initialState: INITIAL_STATE,
	reducers: {
		updateFilterName: (state, { payload }: TPayload) => {
			if (payload) state.name = payload
			else delete state.name
		},
		updateFilterGenre: (state, { payload }: TPayload) => {
			if (payload) state.genre = payload
			else delete state.genre
		},
		updateFilterCinema: (state, { payload }: TPayload) => {
			if (payload) state.cinema = payload
			else delete state.cinema
		},
	},
 })

 export const { updateFilterCinema, updateFilterGenre, updateFilterName } = filterSlice.actions
 export default filterSlice.reducer
