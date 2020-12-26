const { DataTypes } = require("sequelize")
const sequelize = require("../db")
const dayjs = require("dayjs")
const dayjsLocalFormat = require("dayjs/plugin/localizedFormat")
dayjs.extend(dayjsLocalFormat)

const Message = sequelize.define("Message", {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  courseId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateCreated: {
    type: DataTypes.STRING,
    defaultValue: dayjs().format("LLL")
  }
}, {tableName: "Messages"})

module.exports = Message