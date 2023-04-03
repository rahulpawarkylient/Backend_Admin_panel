import mongoose from "mongoose";

const socialTwSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const socialModelTw = mongoose.model("socialTw", socialTwSchema);

export default socialModelTw;