import Post, { IPost } from "./post.model";

const createPostIntoDb = async (post: IPost) => {
  const result = await Post.create(post);
  return result;
};

const retrievePostFromDb = async () => {
  const posts = await Post.find();
  return posts;
};

export const postServices = {
  createPostIntoDb,
  retrievePostFromDb,
};
