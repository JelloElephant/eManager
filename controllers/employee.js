const mysql = require('mysql2')
const inquirer = require('inquirer')
const consoleTable = require('console.table')

require("dotenv").config()
const config_db = require("./../config/configdb")

var employee = {
    updateEmployee: async (cb = () => {}) => {
        let connection = mysql.createConnection(config_db)

        let record = await Promise.all([
            connection.promise().query(`SELECT employee.id, concat(employee.first_name, ' ', employee.last_name) AS Employee FROM employees ORDER BY Employee ASC;`)
            .then(([rows, fields]) => {
                return rows
            })
        ])

        let employeeList = []
        let postList = []

        for (i=0; i < record[0].length; i++) {
            employeeList.push(record[0][i].Employee)
        }

        for (i=0; i < record[0].length; i++) {
            postList.push(record[0][i].title)
        }

        inquirer.prompt([
            {
                name: "employee",
                type: "list",
                message: "Select an employee to update.",
                choices: employeeList
            },
            {
                name: "position",
                type: "list",
                message: "Select the employee's new position",
                choices: postList
            }
        ])
        .then((ans) => {
            let postId 
            let empId 

            for (i=0; i < record[0].length; i++) {
                if (ans.position == record[0][i].title) {
                    postId = record[1][i].id
                }
            }

            connection.query(`UPDATE employee SET pos_id = ${postId} WHERE id = ${empId};`, (err, res) => {
                if (err) throw err

                console.log(`${ans.employee} position was changed to ${ans.position}`)
                cb()
                connection.end()
            })
        })
    }
}