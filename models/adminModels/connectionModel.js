import mongoose from "mongoose";

const connectSchema = new mongoose.Schema({
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

const connectModel = mongoose.model("connect", connectSchema);

export default connectModel;
