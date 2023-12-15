import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from url route" });
});

router.route("/").post(async (req, res) => {
  try {
    const { address } = req.body;
    const url = "https://cleanuri.com/api/v1/shortens";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: address,
      }),
    };
    const fetchResponse = await fetch(url, options);

    const data = await fetchResponse.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error || "something went wrong");
  }
});

export default router;
