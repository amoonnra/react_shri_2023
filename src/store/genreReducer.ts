import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: Record<string, string> = {
  action: "Боевик",
  comedy: "Комедии",
  fantasy: "Фентэзи",
  horror: "Ужасы",
};

const genreSlice = createSlice({
  name: "genreDictionary",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default genreSlice.reducer;
