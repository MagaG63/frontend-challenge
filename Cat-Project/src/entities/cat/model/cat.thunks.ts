import { createAsyncThunk } from "@reduxjs/toolkit";
import CatService from "../api/cat.service";

export const catThunk = createAsyncThunk("cat", async () => {
  return await CatService.fetchCat();
});

export const catNextPageThunk = createAsyncThunk(
  "cat/nextPage", 
  async (page: number) => {
    return await CatService.fetchCat(page);
  }
);