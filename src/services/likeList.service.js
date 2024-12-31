import prisma from '../common/prisma/init.prisma.js'

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
      }

    })

    // console.log(likes)
    return likes.map(like => ({
      date_like: like.date_like,
      full_name: like.user?.full_name || null, // Handle case where user might not exist
      res_name: like.restaurant?.res_name || null, // Handle case where restaurant might not exist
    }));

  }

};

export default likeService;
