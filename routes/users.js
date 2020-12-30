let express = require("express")
let router = express.Router()
const { createStudent, updateStudent, dropStudent } = require("../controllers/users")

router.post("/", createStudent)
router.put("/", updateStudent)
router.delete("/", dropStudent)

module.exports = router