const User = require("../models/user-model");
const bcrypt = require("bcrypt");

//*-------------------------
//Home
//*-------------------------
const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome Deepak Dubey for Mern Series taught by Thapa Technical using controller"
      );
  } catch (error) {
    console.log("Error");
  }
};

//*-------------------------
//Registration
//*-------------------------

const register = async (req, res) => {
  try {
    //console.log(req.body);
    //const data = req.body;// doing destructring in next line

    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "user already exists" }); // change msg to message for validation on submit click
    }

    // const saltRound = 10;
    // const bcrypt_password = await bcrypt.hash(password, saltRound);
    // const userCreated = await User.create({ username, email, phone, password:bcrypt_password });

    const userCreated = await User.create({ username, email, phone, password });

    // res.status("200").send({msg: userCreated});
    res.status(201).json({
      msg: "registration successful.",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });

    // res.status("200").send("Welcome to register page using router");
  } catch (error) {
    res.status(500).send({ message: "Internal server error" }); // after explaing middleware error
    //next(error);
  }
};

//*-------------------------
//Login Logic
//*---

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credential deepak" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

//*-------------------------
//after log in user Logic
//*---

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json({ userData });
    return;
  } catch (error) {
    console.log(`Error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
