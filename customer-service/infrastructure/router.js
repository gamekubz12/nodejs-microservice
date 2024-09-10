const express = require("express");
const findall = require("../usecase/findall");
const findone = require("../usecase/findone");
const create = require("../usecase/create");
const update = require("../usecase/update");
const deleted = require("../usecase/delete");

const router = express.Router();

// define the home page route
router.get("/", findall);
router.get("/:id/order", findone);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleted);

module.exports = router;
