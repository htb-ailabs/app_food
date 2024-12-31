import orderService from "../services/orderList.service.js"
import { responseSuccess } from "../common/helpers/response.helper.js";

const orderController = {
    orderList: async (req, res, next) => { 
        try {
            const orders = await orderService.orderList(req)
            const resData = responseSuccess(
        orders,
        `Get list video successfully`,
        200
      );
      res.status(resData.code).json(resData);

        }catch(error) {
            next(error)
        }
     }
}

export default orderController