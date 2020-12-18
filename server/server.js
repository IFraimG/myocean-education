const express = require("express");

const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler()

const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")

const {sequilize, sequilizeAuth} = require("./configs/db")
const usersRouter = require("./routes/users")
const authRouter = require("./routes/auth")

app.prepare().then(() => {
  const server = express();
  const port = process.env.PORT;

  sequilizeAuth()
  require("./configs/jwtCookies")
  
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(bodyParser.json())
  server.use(cookieParser())
  server.use(passport.initialize())
  server.use(passport.session())
  server.use(session({secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true}))
  
  server.get("/check-auth", passport.authenticate('jwt', {session: false}), (req, res, next) => res.send("ы"))
  server.get("*", (req, res) => handle(req, res))
  server.use("/users", usersRouter)
  server.use("/auth", authRouter)

  server.listen(port, (err) => {
    if (err) throw err;
    console.log("Проект запущен на порту http://localhost:" + port);
  });
})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
})
