import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
      },
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

const serviceModel = mongoose.model("service", serviceSchema);

export default serviceModel;
