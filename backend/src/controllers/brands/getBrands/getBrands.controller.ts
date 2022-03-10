import { RequestHandler } from "express";
import { BrandModel } from "../../../db";
import ResponseService from "../../../utils/ResponseService";

const createBrandController: RequestHandler = async (req, res) => {
  try {
    const latMax = Math.max(
      Number(req.query.latStart),
      Number(req.query.latEnd)
    );
    const latMin = Math.min(
      Number(req.query.latStart),
      Number(req.query.latEnd)
    );
    const lngMax = Math.max(
      Number(req.query.lngStart),
      Number(req.query.lngEnd)
    );
    const lngMin = Math.min(
      Number(req.query.lngStart),
      Number(req.query.lngEnd)
    );

    const brands = await BrandModel.find({
      "coordinates.lat": { $gt: latMin, $lt: latMax },
      "coordinates.lng": { $gt: lngMin, $lt: lngMax },
    });

    ResponseService.success(res, brands);
  } catch (err: any) {
    ResponseService.error(res, 400, err.message);
  }
};

export default createBrandController;
