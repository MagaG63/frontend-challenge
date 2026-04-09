import { createAsyncThunk } from "@reduxjs/toolkit";
import CatService from "../api/cat.service";

export const catThunk = createAsyncThunk("cat", async () => {
  return await CatService.fetchCat();
});
