import mongoose from "mongoose";

const socialFbSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const socialModelFb = mongoose.model("socialFb", socialFbSchema);

export default socialModelFb;