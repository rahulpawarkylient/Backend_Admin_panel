import mongoose from "mongoose";

const biographySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  mainHeading: {
    type: String,
    required: true,
  },
  personalInfoTitle: {
    type: String,
    required: true,
  },
  email: {
    type:String,
    require:true
  },
  address: {
    type:String,
    require:true
  },
  mobile: {
    type:String,
    require:true
  },
});

const biographyModel = mongoose.model("biography", biographySchema);

export default biographyModel;
