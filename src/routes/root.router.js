import express from 'express'
import likeRouter from './like.router.js';


// khởi tạo rootRouter từ express.Router() để tận dụng các method từ express
const rootRouter = express.Router()

// đi vào các route thành phần để xử lý tiếp
rootRouter.use(`/like`, likeRouter);


// route mặc định
rootRouter.get(`/`,(req,res,next) => {
    res.json(`hello from root`)
})

export default rootRouter