import express from 'express'
import likeController from "../controllers/like.controller.js";

const likeRouter = express.Router()

// dẫn tới controller để xử lý vào ra
likeRouter.get(`/like-list`,likeController.likeList)

export default likeRouter