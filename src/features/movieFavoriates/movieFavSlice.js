import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieFavoriates: [],
};

export const movFavoriatesSlice = createSlice({
  name: "movFavorites",
  initialState,
  reducers: {
    setMovFavs: (state, action) => {
      state.movieFavoriates.push(action.payload);
    },
    removeMovFavs: (state, action) => {
      const itemIdToRemove = action.payload;
      state.movieFavoriates = state.movieFavoriates.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovFavs, removeMovFavs } = movFavoriatesSlice.actions;

export default movFavoriatesSlice.reducer;
