const mysql = require("mysql2")
const inquirer = require("inquirer")
const consoleTable = require("console.table")

require("dotenv").config()
const config_db = require("./../config/configdb")

const dept = {
    byDept: () => {
        let connection = mysql.createConnection(config_db)
     return new Promise((resolve, reject)=>{
        connection.query(`SELECT name FROM department`, function(err, results){
            if(err){
                console.error("error with query", err);
                connection.end();
                reject(err);
            } else {
                console.table(results);
                connection.end();
                resolve(res);
            }
        });
     });
    },
};

module.exports = dept;