import likeService from "../services/likeList.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

const likeController = {
  likeList: async (req, res, next) => {
    try {
      const likes = await likeService.likeList(req);
      
      const resData = responseSuccess(
        likes,
        `Get list video successfully`,
        200
      );
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default likeController;