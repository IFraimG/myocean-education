const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler()
const bodyParser = require('body-parser')
const {sequilize, sequilizeAuth} = require("./configs/db")
const usersRouter = require("./routes/users")

app.prepare().then(() => {
  const server = express();
  const port = process.env.PORT;

  sequilizeAuth()
  
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(bodyParser.json())

  server.get("*", (req, res) => handle(req, res))
  server.use("/users", usersRouter)
  
  server.listen(port, (err) => {
    if (err) throw err;
    console.log("Проект запущен на порту http://localhost:" + port);
  });
})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
})
