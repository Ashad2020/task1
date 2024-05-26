import express from "express";
import { postRoutes } from "../modules/post/post.route";
const router = express.Router();

router.use("/post", postRoutes);
export default router;
