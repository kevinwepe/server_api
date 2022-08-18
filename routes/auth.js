const router = require("express").Router();
const { SignInHandler, SignUpHandler } = require("../controller/auth")

router.post("/signin", SignInHandler);

router.post("/signup", SignUpHandler);

//bikin mana wen dbnya,  mongoosmeongatlasok, mongoatlas

module.exports = router
