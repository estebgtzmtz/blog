import BlogPosts from "../models/BlogPosts";
import { Request, Response } from "express";

export const GetPosts = async (req: Request, res: Response) => {
  const posts = await BlogPosts.find().sort({ createdAt: -1 });
  res.status(200).json({ ok: true, data: posts });
};

export const GetPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await BlogPosts.findById(id);

  if (!post) {
    res.status(404).json({ ok: false, message: "Post not found" });
    return;
  }
  res.status(200).json({ ok: true, data: post });
  return;
};

export const MatchPosts = async (req: Request, res: Response) => {
  const { query } = req.query;
  if (!query || typeof query !== "string") {
    res.status(400).json({
      ok: false,
      message: "Query parameter is required and must be a string.",
    });
    return;
  }

  try {
    const posts = await BlogPosts.find({
      $or: [
        { postTitle: { $regex: query, $options: "i" } }, // `i` para que sea insensible a mayúsculas
        { postDescription: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json({ ok: true, data: posts });
  } catch (error) {
    console.error("Error searching posts:", error);
    res.status(500).json({
      ok: false,
      message: "An error occurred while searching for posts.",
    });
  }
};

export const CreatePost = async (req: Request, res: Response) => {
  const { postTitle, postDescription } = req.body;
  const newPost = new BlogPosts({ postTitle, postDescription });
  await newPost.save();
  res.status(201).json({ ok: true, message: "Post created successfully" });
};

export const UpdatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const updatedData = req.body;

  const updatedPost = await BlogPosts.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });

  if (!updatedPost) {
    res.status(404).json({ ok: false, message: "Post not found" });
    return;
  }

  res.status(200).json({ ok: true, data: updatedPost });
  return;
};

export const DeletePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const deletedPost = await BlogPosts.findByIdAndDelete(id);

  if (!deletedPost) {
    res.status(404).json({ ok: false, message: "Post not found" });
    return;
  }

  res.status(200).send({ ok: true, message: "Post deleted successfully" });
  return;
};
