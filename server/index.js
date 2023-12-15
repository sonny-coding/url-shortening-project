import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/hello", (_, res) => {
  res.send("hello from server");
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
