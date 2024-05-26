import { Schema, model } from "mongoose";

export interface IPost {
  title: string;
  description: string;
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Post = model<IPost>("User", postSchema);

export default Post;
