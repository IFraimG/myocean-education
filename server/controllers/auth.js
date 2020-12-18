let passport = require("passport")
const bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
const Student = require("../models/Students")

module.exports.login = async (req, res) => {
  let user = await Student.findOne({where: {email: req.body.email}})
  if (user == null) return res.status(404).send("Вы неверно ввели данные")
  let err, isPassword = bcrypt.compareSync( req.body.password, user.password)

  if (!isPassword) return res.status(400).send("Вы ввели неккоректный пароль")

  jwt.sign({email: user.email}, process.env.SECRET_KEY, (err, token) => {
    if (err) return res.status(500).send(err)
    res.cookie("jwt", token, {path: "/", sameSite: true})

    return res.status(200).json({jwt: token})
  })
}

module.exports.authUser = async (req, res) => {
  
}