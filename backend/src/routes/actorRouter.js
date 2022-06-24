const express = require("express");
const actorController = require("../controllers/actorController");
const { verifyLogin } = require("../middleware/verifyLogin"); // Middleware for Auth
const { verifyToken } = require("../middleware/verifyToken"); // Middleware for Auth
const router = express.Router();

router.post("/create", actorController.create); // Create
router.get("/", actorController.index); // Index
router.get("/:id", actorController.show); // Show
router.put("/:id", actorController.update); // Update
router.delete("/:id", actorController.destroy); // Delete
router.post("/image/:id", actorController.upload); // Upload Image

module.exports = router;
