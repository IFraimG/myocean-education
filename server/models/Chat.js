const { DataTypes } = require("sequelize")
const sequelize = require("../../db")
const dayjs = require("dayjs")
const dayjsLocalFormat = require("dayjs/plugin/localizedFormat")
dayjs.extend(dayjsLocalFormat)

const Chat = sequelize.define("Dialogs", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: "Описание отсутствует"
  },
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  courseId: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  dateCreated: {
    type: DataTypes.STRING,
    defaultValue: dayjs().format("LLL")
  },
  users: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  admin: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {tableName: "Dialogs"})

module.exports = Chat