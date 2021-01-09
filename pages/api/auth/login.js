import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
import Student from "../../../server/models/Students"

export default async function handler(req, res) {
  let user = await Student.findOne({where: {email: req.query.email}})
  if (user == null) return res.status(404).send("Вы неверно ввели данные")
  let err, isPassword = bcrypt.compareSync( req.query.password, user.password)

  if (!isPassword) return res.status(400).send("Вы ввели неккоректный пароль")

  jsonwebtoken.sign({email: user.email, id: user.id }, process.env.SECRET_KEY, (err, token) => {
    if (err) return res.status(500).send(err)
    return res.status(200).json({jwt: token})
  })
}