import mongoose from "mongoose";

const bioEmploymentSchema = new mongoose.Schema({
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
  p4: {
    type: String,
    required: true,
  },
});

const bioEmploymentModel = mongoose.model("bioEmployment", bioEmploymentSchema);

export default bioEmploymentModel;
