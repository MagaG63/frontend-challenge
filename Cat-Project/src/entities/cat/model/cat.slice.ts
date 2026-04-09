import { createSlice } from "@reduxjs/toolkit";
import type { CatState } from "./cat.types";
import { catThunk } from "./cat.thunks";
import CatService from "../api/cat.service";

const initialState: CatState = {
  cat: null,
  favoritesCat: null,
  loading: true,
  error: null,
};

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    favoriteCat: (state) => {
      state.favoritesCat = CatService.fetchFavoriteCat();
    },
    addFavoriteCat: (state, action) => {
      state.favoritesCat = CatService.addFavoriteCat(action.payload);
    },
    removeFavoriteCat: (state, action) => {
      state.favoritesCat = CatService.removeFavoriteCat(action.payload);
    },
  },
  extraReducers: (build) => {
    build
      .addCase(catThunk.fulfilled, (state, action) => {
        state.cat = action.payload;
        state.loading = false;
      })
      .addCase(catThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(catThunk.rejected, (state) => {
        state.error = "Error fetching cats";
        state.loading = false;
      });
  },
});

export const { favoriteCat, addFavoriteCat, removeFavoriteCat } = catSlice.actions;

export default catSlice.reducer;
