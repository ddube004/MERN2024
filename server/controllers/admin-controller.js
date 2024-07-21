const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// Admin User
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log("Admin User", users);

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// delete by user  id logic
const deleteByUserId = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    next(error);
  }
};

// get user by id
const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//update logic by user id
const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateduserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updateduserData }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// Admin Contact
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    console.log("Admin Contact", contacts);
    if (!Contact || Contact.length === 0) {
      return res.status(404).json({ message: "No contact found" });
    }
    res.status(200).json({ message: contacts });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteByUserId,
  getUserById,
  updateUserById,
};
