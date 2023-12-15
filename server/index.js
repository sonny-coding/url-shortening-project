import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import urlRoutes from "./routes/urlRoutes.js";

const app = express();

// middlewares
app.use(cors());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/api/url", urlRoutes);

app.get("/hello", (_, res) => {
  res.status(200).send({ message: "hello from server" });
});

// test
app.post("/example", (req, res) => {
  console.log(req.body); // Access the parsed request body
  res.send("Request body received!");
});

const startServer = async () => {
  try {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
