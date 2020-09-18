const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "emp_tracker_db"
  });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    runSearch();
  });
  
  function runSearch() {
    inquirer
      .prompt({
        name: "create",
        type: "list",
        message: "Create a [Department], a [Role], an [Employee] or [View] the following:",
              choices: ["Department", "Role", "Employee", "View"]
          })
          .then(function(promptOptions){
              if (promptOptions.create === "Department") {
                  addDepartment();
              }
              else if(promptOptions.create === "Role") {
                  addRole();
              }
              else if(promptOptions.create === "Employee") {
                  addEmployee();
              }
              else if(promptOptions.create === "View") {
                  viewData();
              }
              else{
                  connection.end();
              }
          })
  }

  function addDepartment() {
    inquirer
      .prompt([
        {
          name: "division",
          type: "input",
          message: "What department do you want to add?",
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.division
          },
          function(err) {
            if (err) throw err;
            console.log("Your department was added!");
            runSearch();
          }
        );
      });
  }


  function addRole() {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What role title are you adding?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary for this position?",
        },
        {
          name: "departmentId",
          type: "input",
          message: "What departmentID are we adding?",
        }
      ])
      .then(function(answer) {

        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departmentId
          },
          function(err) {
            if (err) throw err;
            console.log("Role Added!");
            runSearch();
          }
        );
      });
  }

  function addEmployee() {
    inquirer
      .prompt([
        {
          name: "first",
          type: "input",
          message: "What is the first name of employee?",
        },
        {
          name: "last",
          type: "input",
          message: "What is the last name of employee?",
        },
        {
          name: "roleId",
          type: "input",
          message: "What role Id number does the employee have?"
        },
        {
          name: "managerId",
          type: "input",
          message: "What is the manager ID number for this employee?",
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first,
            last_name: answer.last,
            role_id: answer.roleId,
            manager_id: answer.managerId
          },
          function(err) {
            if (err) throw err;
            console.log("Employee Added!");
            runSearch();
          }
        );
      });
  }

  function viewData() {
    inquirer
      .prompt({
        name: "table",
        type: "list",
        message: "What table would you like to view?",
        choices: ["Department", "Role", "Employee"]
      })
      .then(function(answer) {
        if (answer.table === "Department") {
          viewDepartment();
        }
        else if(answer.table === "Role") {
          viewRole();
        } 
        else if(answer.table === "Employee") {
          viewEmployee();
        }
        else{
          connection.end();
        }
      });
  }

  function viewDepartment() {
    connection.query("SELECT * FROM department", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };
  
  function viewRole() {
    connection.query("SELECT * FROM role", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };
  
  function viewEmployee() {
    connection.query("SELECT * FROM employee", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };