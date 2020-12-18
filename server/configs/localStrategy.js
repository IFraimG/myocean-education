const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const Student = require("../models/Students")
const bcrypt = require("bcrypt")

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password",
  session: false,
  passReqToCallback: true
}, async (email, password, done) => {
  console.log(email);
  let user = await Student.findOne({where: {email: email}})
  if (user == null) return res.status(404).send("Вы неверно ввели данные")
  let err, isPassword = bcrypt.compareSync(password, user.password)

  if (!isPassword) return res.status(400).send("Вы ввели неккоректный пароль")
  else return done(null, user)
}))

module.exports = passport