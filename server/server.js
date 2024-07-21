require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// let tackle cors
var corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  Credential: true,
};

// for postman
app.use(cors(corsOptions));
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//Let define Admin route
app.use("/api/admin",adminRoute);



app.use(errorMiddleware); // if any error no connection with Db at all that is why we add at end

// // app.get("/",(req,res)=>{
// // res.status("200").send("Welcome Deepak Dubey for Mern Series taught by Thapa Technical");
// // });

// // app.get("/register",(req,res)=>{
// //     res.status("200").send("Welcome to register page");
// //     });

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
