import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.route("/").get((_, res) => {
  res.status(200).json({ message: "Hello from url route" });
});

// this workkkkssss
router.route("/").post(async (req, res) => {
  try {
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

    res.status(200).json({ short: data.result_url });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

export default router;
