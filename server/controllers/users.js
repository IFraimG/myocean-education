const Students = require("../models/Students")

const dayjs = require("dayjs")
const dayjsLocalFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(dayjsLocalFormat)

module.exports.getStudents = async (req, res) => {
  let user = await Students.findByOne({where: {id: req.params.id}})
  if (user == null) res.status(404).send("Данного пользователя не существует")
  else res.send(user)
};

module.exports.getAllUsers = async (req, res) => {
  let users = await Students.findAll()
  console.log(users);
  res.send(users)
}

module.exports.createStudent = async (req, res) => {
  const data = req.body
  let userData = {
    firstName: data.firstname,
    lastName: data.lastname,
    email: data.email,
    password: data.password,
    id: "",
    dateCreated: dayjs().format("LLL")
  }

  let isNotUser = false
  let words = "abcdefghijklmnopqrstuvwxyz";
  while (isNotUser != true) {
    let id = ""
    for (let i = 0; i <= 14; i++) {
      id += words.charAt(Math.floor(Math.random() * words.length))
    }
    let isUser = await Students.findOne({where: {id: id}})
    if (isUser == null) {
      isNotUser = true
      userData.id = id
    }
  }

  let user = await Students.create(userData)
  res.status(201).send(user)
};

module.exports.updateStudent = async (req, res) => {
  res.send("nhfgvc")
};

module.exports.dropStudent = async (req, res) => {
  for (let i = 0; i < req.body.usersID.length; i++) {
    await Students.destroy({where: {id: req.body.usersID[i]}})
  }
  res.send("Пользователи удалены")
};
