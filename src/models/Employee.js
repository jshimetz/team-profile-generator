class Employee {
    constructor(name, employeeId, email) {
      this.name = name;
      this.employeeId = employeeId;
      this.email = email;
    }
  
    getRole() {
      return 'Employee';
    }
  }
  
  module.exports = Employee;