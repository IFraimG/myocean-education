const { Sequelize, DataTypes } = require("sequelize")
const { sequilize } = require("../../db")
const bcrypt = require("bcrypt")
const dayjs = require("dayjs")
const dayjsLocalFormat = require("dayjs/plugin/localizedFormat")

dayjs.extend(dayjsLocalFormat)

const generatePassword = (user, options) => {
  if (!user.changed("password")) return user.password
  else {
    let salt = bcrypt.genSaltSync(10)
    return user.password = bcrypt.hashSync(user.password, salt)
  }
}

const Student = sequilize.define("Student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateCreated: {
    type: DataTypes.STRING,
    defaultValue: dayjs().format("LLL")
  },
  activeCourses: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  finishedCourses: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  }
}, {tableName: "Students", hooks: { beforeCreate: generatePassword, beforeUpdate: generatePassword }})

module.exports = Student