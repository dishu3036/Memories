import PostMessage from "../models/postMesgSchema.js";

export const getPost = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json({ post: postMessages });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
