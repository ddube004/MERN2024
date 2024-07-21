const mongoose = require("mongoose");
//const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI =
  "mongodb+srv://deepakdubey456:Saiyash2012@cluster0.gkk3h45.mongodb.net/mern_admin?retryWrites=true&w=majority";

// const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI); // pass the uri
    console.log("connection successful to database");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
