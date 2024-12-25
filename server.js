import express from 'express'
import rootRouter from './src/routes/root.router.js';

// khởi tạo app cho ứng dụng
const app = express()
// middleware giúp phân giải dữ liệu json sang object javascript
app.use(express.json())

// gọi tới route tổng rootRouter, từ route tổng đi các route con để rootRouter xử lý
app.use(rootRouter)


app.listen(3069,(params) => {
    console.log(`Server is open at http://localhost:3069`)
})