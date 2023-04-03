import mongoose from "mongoose";

const biographySocialSchema = new mongoose.Schema({
  socialHeading: {
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
  p7: {
    type: String,
    required: true,
  },
  p8: {
    type: String,
    required: true,
  },
  p9: {
    type: String,
    required: true,
  },
  p10: {
    type: String,
    required: true,
  },
  p11: {
    type: String,
    required: true,
  },
  p12: {
    type: String,
    required: true,
  },
  p13: {
    type: String,
    required: true,
  },
  p14: {
    type: String,
    required: true,
  },
  p15: {
    type: String,
    required: true,
  },
  p16: {
    type: String,
    required: true,
  },
  p17: {
    type: String,
    required: true,
  },
  p18: {
    type: String,
    required: true,
  },
  p19: {
    type: String,
    required: true,
  },
});

const biographySocialModel = mongoose.model(
  "biographySocial",
  biographySocialSchema
);

export default biographySocialModel;