let multer = require('multer')
const dayjs = require("dayjs")
const dayjsLocalFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(dayjsLocalFormat)

let storage = multer.diskStorage({
  destination(req, file, callback) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/gif"
    ) callback(null, "uploads/");
  },
  filename(req, file, callback) {
    let date = dayjs()
    callback(null, date + "-" + file.originalname);
  },
});

let fileFilter = (req, file, callback) => {
  file.mimetype === "image/png" || file.mimetype === "image/jpeg" || 
  file.mimetype === "image/gif" || file.mimetype === "audio/mpeg" ? 
    callback(null, true) : callback(null, false)
}

module.exports = multer({ storage, fileFilter })