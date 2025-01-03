import express from "express";
import likeController from "../controllers/likeList.controller.js";

const likeRouter = express.Router();

// dẫn tới controller để xử lý vào ra
likeRouter.get(`/like-list`, likeController.likeList);
likeRouter.post(`/add-like`, likeController.addLike);
likeRouter.delete(`/:id`, likeController.unLike);

export default likeRouter;
