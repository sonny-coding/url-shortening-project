import mongoose from "mongoose";

const connect = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connect;
