import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
  headingAbout: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  headingContact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const footerModel = mongoose.model("footer", footerSchema);

export default footerModel;