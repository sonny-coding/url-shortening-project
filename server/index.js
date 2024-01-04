import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import connect from "./mongodb/connect.js";
import urlRoutes from "./routes/urlRoutes.js";
import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";

const PORT = 3000;
const app = express();

dotenv.config();

// middlewares
app.use(cors());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/api/url", urlRoutes);
app.use("/api/login", loginRoute);
app.use("/api/register", registerRoute);

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
    app.listen(PORT, () => {
      connect(process.env.MONGODB_URL);
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
