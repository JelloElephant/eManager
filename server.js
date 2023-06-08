
const inquirer = require('inquirer')
const viewControl = require('./controllers/view')
const deptControl = require('./controllers/dept')
const empControl = require('./controllers/employee')
const posControl = require('./controllers/pos')



const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "jB39qf28!",
    database: "employee_db"
})

const init = async () => {
    console.log('Welcome to your eManager!')

    await inquirer
    .prompt({
        name: "Main Menu",
        type: "list",
        message: "Menu",
        choices: [
            "View all Departments",
            "View all Positions",
            "View all Employees",
            "Add new Department",
            "Add new Position",
            "Add new Employee",
            "Update existing Employee",
            "Delete exsisting Employee",
            "Delete existing Position",
            "Delete existing Department"
        ]
    })
    .then((ans) => {
        switch (ans.action) {
            case "View all Departments":
                break
            case "View all Positions":
                break
            case "View all Employees":
                break
            case "Add new Department":
                break
            case "Add new Position":
                break
            case "Add new Employee":
                break
            case "Update existing Employee":
                break
            case "Delete exsisting Employee":
                break
            case "Delete existing Position":
                break
            case "Delete existing Department":
                break
        }
    })
}


init()