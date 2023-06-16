const mysql = require('mysql2')
const inquirer = require('inquirer')
const consoleTable = require('console.table')

require('dotenv').config()
const config_db = require('./../config/configdb')

const pos = {
    displayAllPositions: (cb = () => {}) => {
        let connection = mysql.createConnection(config_db)

        let posts = []
        connection.query(`SELECT title FROM position`, function (err, res) {
            for (i=0; i < res.length; i++) {
                posts.push(res[i].title)
            }

            inquirer.prompt({
                name: "postition",
                type: "list",
                message: "Select a position to search by",
                choices: posts
            })
            .then((ans) => {
                const query = ``
                connection.query(query, (err, res) => {
                    if (err) throw err
                    console.table(res)
                    cb()
                    connection.end()
                })
            })
        })
    },

    createEmployee: async (cb = () => {}) => {
        let connection = mysql.createConnection(config_db)
        let posts = []
        let mans = []

        const results = await Promise.all([
            connection.promise().query(`SELECT id, title, FROM position ORDER BY title ASC;`).then(([rows, fields]) => { return rows}),
            connection.promise().query(`SELECT employee.is, concat(employee.first_name, ' ', employee.last_name) AS Employee FROM employee OREDER by Employee ASC;`).then(([rows, fields]) => { return rows})
        ])

        for (i=0; i < results[0].length; i++) {
            posts.push(results[0][i].title)
        }
        for (i=0; i < results[1].length; i++) {
            mans.push(results[1][i].Employee)
        }

        await inquirer.prompt([
            {
                name: "firstName",
                type: "input",
                message: "Enter the new employees first name: ",
                validate: (input) => {
                    if (input === "") {
                        return false
                    }
                    return true
                }
            },
            {
                name: "lastName",
                type: "input",
                message: "Enter the new employees last name: ",
                validate: (input) => {
                    if (input === "") {
                        return false
                    }
                    return true
                }
            },
            {
                name: "position",
                type: "list",
                message: "What is the new employee's position in the company?",
                choices: posts,
            },
            {
                name: "manager",
                type: "list",
                message: "Who will manage this employee?",
                choices: mans
            }
        ]).then((ans) => {
            let posId = null
            let manId = null

            for (i=0; i < results[0].length; i++) {
                if (ans.position == results[0][i].title) {
                    posId = results[0][i].id
                }
            }

            for (i=0; i < results[1].length; i++) {
                if (ans.manager == results[1][i].Employee) {
                    manId = results[1][i].id
                }
            }

            connection.query(`INSERT INTO employee (first_name, last_name, pos_id, manager_id)
                VALUES ("${ans.firstName}", "${ans.lastName}", ${posId}, ${manId});`, (err, res) => {
                    if (err) return err

                    cb()
                    connection.end()
                })
        })
    },

    addPosition: async (cb = () => {}) => {
        let connection = mysql.createConnection(config_db)

        let depts = []
        const results = await Promise.all([
            connection.promise().query(`SELECT id, name FROM department ORDER BY name ASC;`)
            .then(([rows, fields]) => {
                return rows
            })
        ])

        for (i=0; i < results[0].length; i++) {
            depts.push(results[0][i].name)
        }

        inquirer.prompt([
            {
                name: "position",
                type: "input",
                message: "Enter new position title: "
            },
            {
                name: "salary",
                type: "number",
                message: "Enter the salary amount (digit): "
            },
            {
                name: "dept",
                type: "list",
                message: "Choose positions department: ",
                choices: depts
            }
        ]).then((ans) => {
            let deptId = null

            for (i=0; i < results[0].length; i++) {
                if (ans.dept == results[0][i].name) {
                    deptId = results[0][i].id
                }
            }

            connection.query(
                `INSERT INTO position (title, salary, dept_id)
                    VALUES ("${ans.position}", ${ans.salary}, ${deptId});`, 
                (err, res) => {
                    if (err) throw err
                    cb()
                    connection.end()
                }
            )
        })
    }
}

module.exports = pos