// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addEmployee = true;
  const employees = [];
  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    // Check if salary is a number, default to 0 if not
    if (isNaN(Number(salary))) {
      salary = 0;
    }

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: Number(salary)
    });

    const continueAdding = confirm("Do you want to add another employee?");
    if (!continueAdding) {
      addEmployee = false;
    }
  }
  return employees;
}



// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // Will display average employee salary in console
  let numberEmployees = employeesArray.length;

  let input = 0

  // for loop checks if the index is less then employees array and if it's true will continue loop
  for(let i = 0; i < employeesArray.length; i++) {
    input += employeesArray[i].salary
    console.log(input)
  }
  console.log(input)

  let average = input / numberEmployees
  console.log(`The average salary is ${average.toFixed(2)}`)
}
function sumFunction(total, current) {
  return total + current;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Will display random selected employee in console 
  let employee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Random employee is ${employee.firstName} ${employee.lastName}`)
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
