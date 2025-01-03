import { responseSuccess } from "../common/helpers/response.helper.js";
import rateService from "../services/rate.service.js";

const rateController = {
  rateList: async (req, res, next) => {
    try {
      const rates = await rateService.rateList(req);
      const resData = responseSuccess(rates, `Get list rate successfully`, 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      const errorData = responseError(error.message, error.code, error.stack);
      res.json(errorData);
      next(error);
    }
  },
  addRate: async (req, res, next) => {
    try {
      const rate = await rateService.addRate(req);
      const resData = responseSuccess(rate, `Add rate successfully`, 200);
      res.status(resData.code).json(resData);
    } catch (error) {
      const errorData = responseError(error.message, error.code, error.stack);
      res.json(errorData);
      next(error);
    }
  },
};

export default rateController;
