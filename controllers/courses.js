const Courses = require("../server/models/Courses")

const dayjs = require("dayjs")
const dayjsLocalFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(dayjsLocalFormat)

module.exports.createCourse = async (req, res) => {
  let courseID = null;
  let { title, description, admin } = req.body
  let logo = null
  if (req.file != undefined) logo = "uploads/" + req.file.filename
  let isNotUser = false
  let words = "abcdefghijklmnopqrstuvwxyz";
  while (isNotUser != true) {
    let id = ""
    for (let i = 0; i <= 14; i++) {
      id += words.charAt(Math.floor(Math.random() * words.length))
    }
    let isUser = await Courses.findOne({where: {courseID: id}})
    if (isUser == null) {
      isNotUser = true
      courseID = id
    }
  }

  let course = await Courses.create({title, description, admin, logo, courseID})
  res.send(course)
}