const express = require ("express");
const router = express.Router();

//const usersCtrl = require("../models/user");
const usersCtrl = require("../controllers/user")
ro
uter.post("/signup", usersCtrl.signing);
router.post("/login",  usersCtrl.login);

module.exports = router;