const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddeleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, token not provided" });
  }
  const jwttoken = token.replace("Bearer ", "").trim();

  console.log("token from auth middleware", token);

  try {
    const isVerified = jwt.verify(jwttoken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    
    req.userID = userData._id;
    req.token = token;
    req.user = userData;

    //console.log(userData);
    next();
  } catch (error) {}
};

module.exports = authMiddeleware;
