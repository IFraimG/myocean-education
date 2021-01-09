let { DataTypes } = require("sequelize")
let { sequilize } = require("../../db")

const Course = sequilize.define("Course", {
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: DataTypes.TEXT,
  logo: {
    type: DataTypes.TEXT,
    default: "/pupil/404.png"
  },
  courseID: {
    type: DataTypes.TEXT,
    primaryKey: true
  },
  users: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  admin: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lessons: DataTypes.ARRAY(DataTypes.TEXT),
  moderators: DataTypes.ARRAY(DataTypes.TEXT),
}, {tableName: "Courses"});

module.exports = Course