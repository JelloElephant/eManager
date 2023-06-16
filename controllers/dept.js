const mysql = require("mysql2")
const inquirer = require("inquirer")
const consoleTable = require("console.table")

require("dotenv").config()
const config_db = require("./../config/configdb")

var dept = {
    byDept: (cb = () => {}) => {
        let connection = mysql.createConnection(config_db)

        connection.query(`SELECT name FROM department`, function (err, res) {
            for (i = 0; i < res.length; i++) {
                console.table(res)
                cb()
                connection.end()
            }
        })
    }
}