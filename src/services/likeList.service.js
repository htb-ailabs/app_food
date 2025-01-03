import prisma from "../common/prisma/init.prisma.js";

const likeService = {
  likeList: async (params) => {
    const likes = await prisma.like_res.findMany({
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
    return likes.map((like) => ({
      date_like: like.date_like,
      full_name: like.user?.full_name || null, // Handle case where user might not exist
      res_name: like.restaurant?.res_name || null, // Handle case where restaurant might not exist
    }));
  },

  // add like
  addLike: async (req) => {
    const like = await prisma.like_res.create({
      data: {
        user_id: req.body.user_id,
        res_id: req.body.res_id,
      },
    });

    return like;
  },

  // delete a student
  unLike: async (req) => {
    const id = parseInt(req.params.id);
    // const { fullName, age, numberClass } = req.body;
    const ulike = await prisma.like_res.delete({
      where: {
        id: id,
      },
    });
    return ulike;
  },
};

export default likeService;
