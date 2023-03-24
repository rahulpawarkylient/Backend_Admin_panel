import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({
  logoname: {
    type: String,
    required: true,
  },
  logoslogan: {
    type: String,
    required: true,
  },
  menu1: {
    type: String,
    required: true,
  },
  menu2: {
    type: String,
    required: true,
  },
  menu3: {
    type: String,
    required: true,
  },
  menu4: {
    type: String,
    required: true,
  },
  menu5: {
    type: String,
    required: true,
  },
  menu6: {
    type: String,
    required: true,
  },
});

const navbarModel = mongoose.model("navbar", navbarSchema);

export default navbarModel;
