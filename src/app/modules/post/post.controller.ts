import { NextFunction, Request, Response } from "express";
import { postServices } from "./post.service";

import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";

const createPost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const post = req.body;

    const result = await postServices.createPostIntoDb(post);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Post created successfully",
      data: result,
    });
  }
);

const retrievePost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const posts = await postServices.retrievePostFromDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Post retrieved successfully",
      data: posts,
    });
  }
);

export const postControllers = {
  createPost,
  retrievePost,
};
