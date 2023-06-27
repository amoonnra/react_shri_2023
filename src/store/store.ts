import filterReducer from "@/app/Filter/Slice/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./movieReducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import genreReducer from "./genreReducer";
import basketReducer from "./basketReducer";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    genres: genreReducer,
    basket: basketReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
