import express from "express";
import { getPost, createPost } from "../controller/postController.js";

const postRouter = express.Router();

postRouter.get("/", getPost);

postRouter.post("/", createPost);

export default postRouter;
