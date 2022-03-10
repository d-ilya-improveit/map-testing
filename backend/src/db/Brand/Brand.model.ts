import mongoose from "mongoose";
import { BrandType } from "./types";

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    minimumPurchaseAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    tags: [{ type: String }],
    products: [{ type: String }],
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<BrandType>("Brands", BrandSchema);
