import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express";
import userModel from "../mongodb/models/user.js";

const router = express.Router();

router.route("/").post(async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (!user) {
    return res.status(401).send("Invalid username");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).send("Invalid email or password");
  }
  const mysecretkey = process.env.SECRET_CODE;
  const payload = {
    username: user.username,
    uid: user._id,
  };
  const token = jwt.sign(payload, mysecretkey, { expiresIn: "5d" });
  res.status(200).json({
    msg: "User is logged in",
    token: token,
  });
});

export default router;
