import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  l1: {
    type: String,
    required: true,
  },
  l2: {
    type: String,
    required: true,
  },
  l3: {
    type: String,
    required: true,
  },
  l4: {
    type: String,
    required: true,
  },
  l5: {
    type: String,
    required: true,
  },
  l6: {
    type: String,
    required: true,
  },
  l7: {
    type: String,
    required: true,
  },
  l8: {
    type: String,
    required: true,
  },
});

const workModel = mongoose.model("work", workSchema);

export default workModel;
