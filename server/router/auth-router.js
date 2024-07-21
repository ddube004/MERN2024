// vip route

const express = require("express");
const router = express.Router();
// const {home,register} = require("../controllers/auth-controller");
const authcontroller = require("../controllers/auth-controller");
const {signupSchema,loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddeleware = require("../middlewares/auth-middleware")

// // router.get("/",(req,res)=>{
// // res.status("200").send("Welcome Deepak Dubey for Mern Series taught by Thapa Technical using router");
// // });

// // OR

// // router.route("/").get((req, res) => {
// //   res
// //     .status("200")
// //     .send(
// //       "Welcome Deepak Dubey for Mern Series taught by Thapa Technical using router"
// //     );
// // });

// router.route("/").get(home);
router.route("/").get(authcontroller.home);

// // router.route("/register").get((req, res) => {
// //   res.status("200").send("Welcome to register page using router");
// // });

// router.route("/").get(register);
router.route("/register").post(validate(signupSchema), authcontroller.register); //from postman body u want to post

// router.route("/login").post(authcontroller.login);
router.route("/login").post(validate(loginSchema),authcontroller.login);

router.route("/user").get(authMiddeleware,authcontroller.user); // to check middleware where userexist on client local storage using jwt.

module.exports = router;
