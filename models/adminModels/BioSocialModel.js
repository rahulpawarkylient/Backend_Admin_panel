import mongoose from "mongoose";

const bioSocialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  p1: {
    type: String,
    required: true,
  },
  p2: {
    type: String,
    required: true,
  },
  p3: {
    type: String,
    required: true,
  },
});

const bioSocialModel = mongoose.model("bioSocialProfile", bioSocialSchema);

export default bioSocialModel;
