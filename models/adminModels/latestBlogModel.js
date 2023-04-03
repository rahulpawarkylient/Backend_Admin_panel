import mongoose from "mongoose";

const latestBlogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const latestBlogModel = mongoose.model("latestBlog", latestBlogSchema);

export default latestBlogModel;
