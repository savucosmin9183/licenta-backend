const express = require("express");
const router = express.Router();

const {
  getProjects,
  addProject,
  deleteProject,
  updateProject,
} = require("../controllers/project.js");

router.get("/", getProjects);

router.post("/", addProject);

router.delete("/:id", deleteProject);

router.patch("/:id", updateProject);

module.exports = router;
