import prisma from "../common/prisma/init.prisma.js";

const orderService = {
  //   orderList: async (req) => {
  //     const order = req;
  //     console.log(req);
  //     return order;
  //   },

  addOrder: async (req) => {
    const order = await prisma.order.create({
      data: {
        user_id: req.body.user_id,
        food_id: req.body.food_id,
        amount: req.body.amount,
        code: req.body.code,
        arr_sub_id: req.body.arr_sub_id,
      },
    });

    console.log(order);
    return order;
  },
};

export default orderService;
