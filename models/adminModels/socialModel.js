import mongoose from "mongoose";

const socialSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
});

const socialModel = mongoose.model("social", socialSchema);

export default socialModel;