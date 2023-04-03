import mongoose from "mongoose";

const biographyEducationSchema = new mongoose.Schema({
  educationHeading: {
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

  p4: {
    type: String,
    required: true,
  },
  p5: {
    type: String,
    required: true,
  },
  p6: {
    type: String,
    required: true,
  },
});

const biographyEducationModel = mongoose.model(
  "biographyEducationSchema",
  biographyEducationSchema
);

export default biographyEducationModel;