import express, { NextFunction, Request, Response } from "express";
import { postControllers } from "./post.controller";
import { AnyZodObject } from "zod";
import { postValidations } from "./post.validation";
import validateRequest from "../../../middlewares/validateRequest";

const route = express.Router();

route.get("/", postControllers.retrievePost);
route.post(
  "/",
  validateRequest(postValidations.createPostValidationSchema),
  postControllers.createPost
);

export const postRoutes = route;
