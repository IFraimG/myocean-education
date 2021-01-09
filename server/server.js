const express = require("express");

const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler()

const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const session = require("express-session")

const {sequilizeAuth} = require("../db")
const usersRouter = require("../routes/users")
const coursesRouter = require("../routes/courses")

app.prepare().then(() => {
  const server = express();
  sequilizeAuth()

  server.use(bodyParser.urlencoded({extended: false}))
  server.use(bodyParser.json())
  server.use(cookieParser())
  server.use(session({secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true}))
  
  server.get("*", (req, res) => handle(req, res))
  server.use("/users", usersRouter)
  server.use("/courses", coursesRouter)

  server.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log("Проект запущен на порту http://localhost:" + process.env.PORT);
  });
})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
})
