const express = require("express");
const router = express.Router();

const {
  getLinks,
  addLink,
  deleteLink,
  updateLink,
} = require("../controllers/link.js");

router.get("/", getLinks);

router.post("/", addLink);

router.delete("/:id", deleteLink);

router.patch("/:id", updateLink);

module.exports = router;
