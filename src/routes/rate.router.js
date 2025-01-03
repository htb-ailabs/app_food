import express from "express";
import rateController from "../controllers/rate.controller.js";

const rateRouter = express.Router();

// route to controller of rate
rateRouter.get(`/rate-list`, rateController.rateList);
rateRouter.post(`/add-rate`, rateController.addRate);

export default rateRouter;
