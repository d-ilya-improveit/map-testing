import { Response } from "express";

class ResponseService {
  static success(res: Response, data: any) {
    res.json(data);
  }

  static error(res: Response, errorCode?: number, errorMsg?: string) {
    res.status(errorCode ?? 500).send(errorMsg ?? "");
  }
}

export default ResponseService;
