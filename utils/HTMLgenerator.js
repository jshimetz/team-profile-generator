const fs = require('fs');

function generateHTML(teamMembers) {
  let htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Roster</title>
      <style>
        /* CSS styles for the team roster */
        /* ... */
      </style>
    </head>
    <body>
      <header>
        <h1>Team Roster</h1>
      </header>
      <main>
        <section id="manager-section">
          <h2>Manager</h2>
          <div class="card">
            <h3>${teamMembers[0].name}</h3>
            <p>Employee ID: ${teamMembers[0].employeeId}</p>
            <p>Email: <a href="mailto:${teamMembers[0].email}">${teamMembers[0].email}</a></p>
            <p>Office Number: ${teamMembers[0].officeNumber}</p>
          </div>
        </section>
        <section id="engineer-section">
          <h2>Engineers</h2>
          <div class="card-container">
  `;

  for (let i = 1; i < teamMembers.length; i++) {
    if (teamMembers[i] instanceof Engineer) {
      htmlTemplate += `
            <div class="card">
              <h3>${teamMembers[i].name}</h3>
              <p>Employee ID: ${teamMembers[i].employeeId}</p>
              <p>Email: <a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></p>
              <p>GitHub: <a href="https://github.com/${teamMembers[i].github}" target="_blank">${teamMembers[i].github}</a></p>
            </div>
      `;
    }
  }

  htmlTemplate += `
          </div>
        </section>
        <section id="intern-section">
          <h2>Interns</h2>
          <div class="card-container">
  `;

  for (let i = 1; i < teamMembers.length; i++) {
    if (teamMembers[i] instanceof Intern) {
      htmlTemplate += `
            <div class="card">
              <h3>${teamMembers[i].name}</h3>
              <p>Employee ID: ${teamMembers[i].employeeId}</p>
              <p>Email: <a href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></p>
              <p>School: ${teamMembers[i].school}</p>
            </div>
      `;
    }
  }

  htmlTemplate += `
          </div>
        </section>
      </main>
    </body>
    </html>
  `;

  fs.writeFile('team.html', htmlTemplate, (err) => {
    if (err) throw err;
    console.log('HTML file generated: team.html');
  });
}

module.exports = generateHTML;
