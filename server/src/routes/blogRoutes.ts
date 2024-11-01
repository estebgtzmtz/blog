import express, { Router } from "express";
import {
  CreatePost,
  DeletePost,
  GetPostById,
  GetPosts,
  MatchPosts,
  UpdatePost,
} from "../controllers/blogControllers";

const router: Router = express.Router();

router.get("/getPosts", GetPosts);

router.get("/getPost/:id", GetPostById);

router.get("/searchPosts", MatchPosts);

router.post("/createPost", CreatePost);

router.patch("/updatePost/:id", UpdatePost);

router.delete("/deletePost/:id", DeletePost);

export default router;
