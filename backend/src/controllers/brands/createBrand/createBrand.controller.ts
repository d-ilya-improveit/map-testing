import { RequestHandler } from "express";
import { BrandModel } from "../../../db";
import ResponseService from "../../../utils/ResponseService";

const createBrandController: RequestHandler = async (req, res) => {
  try {
    const newBrand = await BrandModel.create(req.body);

    ResponseService.success(res, { ...newBrand.toObject(), __v: undefined });
  } catch (err: any) {
    ResponseService.error(res, 400, err.message);
  }
};

export default createBrandController;
