const inquirer = require('inquirer');
const viewControl = require('./controllers/view');
const deptControl = require('./controllers/dept');
const empControl = require('./controllers/employee');
const posControl = require('./controllers/pos');

const mainMenu = {
  type: 'list',
  name: 'method',
  message: 'Menu',
  choices: [
    'View all Departments',
    'View all Positions',
    'View all Employees',
    'Add new Department',
    'Add new Position',
    'Add new Employee',
    'Update existing Employee',
    'Exit',
  ],
};

function start() {
  console.log('Welcome to your eManager!');
  promptMenu();
}

async function promptMenu() {

  inquirer.prompt(mainMenu)
  .then(ans => {
    switch (ans.method) {
      case 'View all Employees':
        viewControl.displayAll()
        .then((results) => {
          console.table(results)
        })
        break;
      case 'View all Positions':
        posControl.displayAllPositions()
        .then((results) => {
          console.table(results)
        })
        break;
      case 'View all Departments':
        deptControl.byDept()
        .then((results) => {
          console.table(results)
        })
        break;
      case 'Add new Department':
        deptControl.addNewDepartment();
        break;
      case 'Add new Position':
        posControl.addPosition();
        break;
      case 'Add new Employee':
        posControl.createEmployee();
        break;
      case 'Update existing Employee':
        empControl.updateEmployee();
        break;
      }
    })
    .catch(err => {
      console.log('Something broke', err)
      process.exit(1)
    })

  
}

start();
