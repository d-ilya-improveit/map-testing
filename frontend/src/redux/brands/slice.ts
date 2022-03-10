import { createSlice } from "@reduxjs/toolkit";
import { getBrandsThunk } from "./thunks";
import { Brand } from "../../types/brands";
import { StoreStatuses, STATUS_ENUM } from "../../types/statuses";
import { StatusGenerator } from "../../utils/StatusGenerator";

interface IState {
  brands: Brand[];

  statuses: StoreStatuses;
}

const initialState: IState = {
  brands: [],

  statuses: StatusGenerator.generateStatuses([getBrandsThunk.typePrefix]),
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getBrandsThunk.pending, (state) => {
        state.statuses[getBrandsThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(getBrandsThunk.rejected, (state, { error }) => {
        state.statuses[getBrandsThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(getBrandsThunk.fulfilled, (state, { payload }) => {
        state.statuses[getBrandsThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.brands = payload;
      }),
});

export default brandsSlice;
