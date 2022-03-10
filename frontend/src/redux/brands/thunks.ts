import { createAsyncThunk } from "@reduxjs/toolkit";
import API_ROUTES from "../../config/apiRoutes";
import { Brand, GetBrandsQuery } from "../../types/brands";
import API from "../../utils/api";

export const getBrandsThunk = createAsyncThunk<Brand[], GetBrandsQuery>(
  "brands/getBrands",
  async (queryData, { rejectWithValue }) => {
    try {
      const { data: brands } = await API.get(
        API_ROUTES.BRANDS.GET_BRANDS(queryData)
      );
      return brands;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
