const express = require("express");
const findAll = require("../usecase/findall");
const findOne = require("../usecase/findone");
const create = require("../usecase/create");
const update = require("../usecase/update");
const deleted = require("../usecase/delete");

const router = express.Router();

// define the home page route
router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleted);

module.exports = router;
