const express = require("express");
const router = express.Router();
// const {getAllUsers,getAllContacts} = require("../controllers/admin-controller");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

// router.route("/users").get(authMiddleware, adminController.getAllUsers);
// router.route("/contacts").get(authMiddleware, adminController.getAllContacts);


// router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);

// router
//   .route("/users/delete/:id")
//   .delete(authMiddleware, adminMiddleware, adminController.deleteByUserId);

// router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getUserById);

// router
//   .route("/users/update/:id")
//   .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

// router
//   .route("/contacts")
//   .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

// router
//   .route("/contacts/delete/:id")
//   .delete(authMiddleware, adminMiddleware, adminController.deleteByUserId);




router.route("/users").get(authMiddleware, adminController.getAllUsers);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminController.deleteByUserId);

router.route("/users/:id").get(authMiddleware, adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminController.updateUserById);

router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminController.deleteByUserId);

module.exports = router;
