// const JwtCookieStrategy = require("passport-jwt-cookiecombo");
const passport = require("passport");
const passportJWT = require("passport-jwt")
const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt
const Student = require("../models/Students");


let cookieExtractor = req => {
  console.log(req.cookies);
  if (req && req.cookies) return req.cookies['jwt'];
};

const jwtOptions = {};
jwtOptions.jwtFromRequest = cookieExtractor
jwtOptions.secretOrKey = process.env.SECRET_KEY

passport.serializeUser((user, done) => done(null, user.email));
passport.deserializeUser(async (email, done) => {
  let err, user = await Student.findOne({ where: { email: email } });
  done(err, user);
});

passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  console.log(payload.email);
  let err, user = await Student.findOne({where: {email: payload.email}})
  console.log(user);
  if (err) return done(err, false)
  else if (user) return done(null, user)
  else return done(null, false)
}))

// passport.use(
//   new JwtCookieStrategy(
//     {
//       secretOrPublicKey: process.env.SECRET_KEY,
//       jwtVerifyOptions: jwtOptions,
//       passReqToCallback: false
//     },
//     (payload, done) => done(null, payload.user)
//   )
// );

module.exports = passport;