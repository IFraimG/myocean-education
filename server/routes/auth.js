let express = require("express")
let router = express.Router()
let passport = require("passport")
const { login } = require("../controllers/auth")
require("../configs/localStrategy")

router.post("/login", login)

module.exports = router