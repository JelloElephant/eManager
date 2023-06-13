const mysql = require("mysql12")
const inquirer = require('inquirer')
const consoleTable = require('console.table')

require('dotenv').config()
const config_db = require('./../config/configdb')

const all = {
    displayAll: (cb = () => {}) => {
        let connection = mysql.createConnection(config_db)

        let query = `SELECT`

        connection.query(query, function (err, res) {
            if (err) throw err
            console.table(res)
            cb()
        })

        connection.end()
    }
}

module.exports = all