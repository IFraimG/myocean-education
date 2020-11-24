let express = require("express")
let router = express.Router()
const { getStudents, createStudent, updateStudent, dropStudent, getAllUsers } = require("../controllers/users")

router.get("/:id", getStudents)
router.get("/all", getAllUsers)
router.post("/", createStudent)
router.put("/", updateStudent)
router.delete("/", dropStudent)

module.exports = router