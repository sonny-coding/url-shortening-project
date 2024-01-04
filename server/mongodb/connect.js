import mongoose from "mongoose";

const connect = async (url) => {
  // mongoose.set("strictQuery", true);
  // mongoose
  //   .connect(url)
  //   .then(() => {
  //     console.log("connected to mongodb");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  try {
    mongoose.set("strictQuery", true);
    const connection = await mongoose.connect(url);
    if (connection) {
      console.log("connected to mongodb");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connect;
