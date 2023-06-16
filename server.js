const inquirer = require('inquirer')
const viewControl = require('./controllers/view')
const deptControl = require('./controllers/dept')
const empControl = require('./controllers/employee')
const posControl = require('./controllers/pos')


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
        ]
    })
    .then((ans) => {
        switch (ans.action) {
            case "View all Employees":
                viewControl.displayAll(init)
                break
            case "View all Positions":
                posControl.displayAllPositions(init)
                break
            case "View all Departments":
                deptControl.byDept(init)
                break
            case "Add new Department":
                deptControl.addNewDepartment(init)
                break
            case "Add new Position":
                posControl.addPosition(init)
                break
            case "Add new Employee":
                posControl.createEmployee(init)
                break
            case "Update existing Employee":
                empControl.updateEmployee(init)
                break
    }})
}


init()