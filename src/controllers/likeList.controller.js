import likeService from "../services/likeList.service.js";
import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper.js";

const likeController = {
  // get all list
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
      const errorData = responseError(error.message, error.code, error.stack);
      res.json(errorData);
      next(error);
    }
  },

  // add like
  addLike: async (req, res, next) => {
    try {
      const likes = await likeService.addLike(req);

      const resData = responseSuccess(
        likes,
        `Get list video successfully`,
        200
      );
      res.status(resData.code).json(resData);
    } catch (error) {
      const errorData = responseError(error.message, error.code, error.stack);
      res.json(errorData);
      next(error);
    }
  },

  // unlike
  unLike: async (req, res, next) => {
    try {
      const likes = await likeService.unLike(req);

      const resData = responseSuccess(
        likes,
        `Get list video successfully`,
        200
      );
      res.status(resData.code).json(resData);
    } catch (error) {
      const errorData = responseError(error.message, error.code, error.stack);
      res.json(errorData);
      next(error);
    }
  },
};

export default likeController;
