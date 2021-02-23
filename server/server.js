const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler()

const express = require("express");
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")

app.prepare().then(() => {
  const server = express();
  
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(bodyParser.json())
  server.use(cookieParser())
  server.get("*", (req, res) => handle(req, res))

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("Проект запущен на порту http://localhost:3000");
  });
})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
})
