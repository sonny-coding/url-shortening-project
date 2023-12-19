import mongoose from "mongoose";

const Address = new mongoose.Schema({
  long: { type: String, required: true },
  short: { type: String, required: true },
});

const addressModel = mongoose.model("Address", Address);
export default addressModel;
