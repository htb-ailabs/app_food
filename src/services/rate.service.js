import prisma from "../common/prisma/init.prisma.js";

const rateService = {
  rateList: async (params) => {
    const rates = await prisma.rate_res.findMany({
      select: {
        date_like: true,
        user: {
          select: {
            full_name: true,
          },
        },
        restaurant: {
          select: {
            res_name: true,
          },
        },
      },
    });

    // console.log(likes)
    return rates.map((rate) => ({
      date_like: rate.date_like,
      full_name: rate.user?.full_name || null, // Handle case where user might not exist
      res_name: rate.restaurant?.res_name || null, // Handle case where restaurant might not exist
    }));
  },

  addRate: async (req) => {
    const rate = await prisma.rate_res.create({
      data: {
        user_id: req.body.user_id,
        res_id: req.body.res_id,
        amount: req.body.amount,
      },
    });

    console.log(rate);
    return rate;
  },
};

export default rateService;
