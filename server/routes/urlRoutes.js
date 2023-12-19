import express from "express";
import fetch from "node-fetch";
import addressModel from "../mongodb/models/address.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const addresses = await addressModel.find({});
    res.status(200).json({ data: addresses });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// this workkkkssss
router.route("/").post(async (req, res) => {
  try {
    // create short url
    const { address } = req.body;
    const url = "https://cleanuri.com/api/v1/shorten";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: address }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    // save long and short url to mongodb
    const newAddress = await addressModel.create({
      long: address,
      short: data.result_url,
    });
    console.log(newAddress);
    res.status(200).json({ data: newAddress });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

export default router;
