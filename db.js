const { Sequelize } = require("sequelize")

const sequilize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {dialect: "postgres", port: 5433})

module.exports.sequilizeAuth = async () => {
  try {
    await sequilize.authenticate()
    await sequilize.sync({ alter: true, logging: true })
    return console.log("Успешное подключение к бд")
  } catch(err) {
    return console.log("Произошла ошибка в подключении к бд", err) 
  }
}

module.exports.sequilize = sequilize