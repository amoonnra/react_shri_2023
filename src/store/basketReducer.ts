import { IMovie } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IReduxStateBasket {
	readonly MAX_NUM_TICKETS: number
	readonly MIN_NUM_TICKETS: number
	list: Record<string, number>
	allTickets: number
}

const INITIAL_STATE: IReduxStateBasket = {
	MAX_NUM_TICKETS: 30,
	MIN_NUM_TICKETS: 0,
	list: {},
	allTickets: 0
};

const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
	addOneTicketToMovie(state, { payload }: PayloadAction<string>) {
		state.list[payload] = state.list[payload] ? state.list[payload] + 1 : 1
		state.allTickets += 1
	},
	removeOneTicketToMovie(state, { payload }: PayloadAction<string>) {
		state.list[payload] -= 1
		state.allTickets -= 1
	},
	removeAllTicketsByMovie(state, { payload }: PayloadAction<string>) {
		state.allTickets -= state.list[payload]
		delete state.list[payload]
	}
  },
});

export const getAllTicketsSelector = (store: RootState): number => store.basket.allTickets
export const getTicketsNumByMovie = (movieId: string) => (store: RootState): number => store.basket.list[movieId]
export const getAllMoviesInBasket = (store: RootState): Record<string, number> => store.basket.list
export const getEdgeValuesNumTickets = (store: RootState): number[] => [store.basket.MIN_NUM_TICKETS, store.basket.MAX_NUM_TICKETS]

export const { addOneTicketToMovie, removeOneTicketToMovie, removeAllTicketsByMovie } = basketSlice.actions
export default basketSlice.reducer;
