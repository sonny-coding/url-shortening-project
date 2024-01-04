import mongoose from "mongoose";

const User = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("User", User);
export default userModel;
