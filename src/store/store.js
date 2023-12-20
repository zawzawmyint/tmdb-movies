import { configureStore } from "@reduxjs/toolkit";
import movFavoriatesReducer from "../features/movieFavoriates/movieFavSlice";

export const store = configureStore({
  reducer: {
    movFavorites: movFavoriatesReducer,
  },
});
