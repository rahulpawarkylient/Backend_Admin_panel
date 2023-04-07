import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      url: {
        type: Array,
        required: true,
      },
});

const galleryModel = mongoose.model(
  "gallery",
  gallerySchema
);

export default galleryModel;