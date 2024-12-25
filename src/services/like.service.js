import prisma from '../common/prisma/init.prisma.js'

const likeService = {
  likeList: async (params) => {
    const likes = await prisma.like_res.count()    
    return likes
  }
};

export default likeService;
