let express = require("express")
let router = express.Router()
const { createCourse } = require("../controllers/courses")
let upload = require("../upload")

router.post("/", upload.single("logo"), createCourse)
// router.put("/", updateStudent)
// router.delete("/", dropStudent)

module.exports = router