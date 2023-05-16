const { promptManager, promptEngineer, promptIntern, promptMenu } = require('./utils/prompts');
const generateHTML = require('./utils/htmlGenerator');
const Manager = require('./models/Manager');
const Engineer = require('./models/Engineer');
const Intern = require('./models/Intern');
const Team = require('./models/Team');

function promptTeamMembers(team) {
  promptMenu().then((menuChoice) => {
    if (menuChoice.option === 'Add an engineer') {
      promptEngineer().then((engineerData) => {
        const engineer = new Engineer(
          engineerData.name,
          engineerData.employeeId,
          engineerData.email,
          engineerData.github
        );
        team.addEmployee(engineer);
        console.log('Engineer added successfully!\n');
        promptTeamMembers(team);
      });
    } else if (menuChoice.option === 'Add an intern') {
      promptIntern().then((internData) => {
        const intern = new Intern(
          internData.name,
          internData.employeeId,
          internData.email,
          internData.school
        );
        team.addEmployee(intern);
        console.log('Intern added successfully!\n');
        promptTeamMembers(team);
      });
    } else {
      team.generateHTML();
    }
  });
}

promptManager().then((managerData) => {
  const team = new Team();
  const manager = new Manager(
    managerData.name,
    managerData.employeeId,
    managerData.email,
    managerData.officeNumber
  );
  team.addEmployee(manager);
  console.log('Team manager added successfully!\n');
  promptTeamMembers(team);
});
