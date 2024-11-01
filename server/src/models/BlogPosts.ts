import { model, Schema } from "mongoose";

const blogPostsSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true,
    },
    postDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("BlogPosts", blogPostsSchema);
