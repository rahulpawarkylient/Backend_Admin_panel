import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
});

const bannerModel = mongoose.model("banner", bannerSchema);

export default bannerModel;
