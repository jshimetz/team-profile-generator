class Team {
    constructor() {
      this.teamMembers = [];
    }
  
    addEmployee(employee) {
      this.teamMembers.push(employee);
    }
  
    generateHTML() {
      // HTML generation logic
      // ...
    }
  }
  
  module.exports = Team;