
// Returns an empty string if no license
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ""
}


// Empty string return if no license
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `* [License](#license)`
    )
  }
  return ""
}

// Empty string return if no license
function renderLicenseSect(license) {
  if (license !== "None") {
    return (
   `## License  

    Copyright @ ${license}. All rights reserved.

    Licensed under the ${license} license.`
    )
  }
  return ""
}

// This function will generate markdown Doc
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description 

  ${data.description}

  ## Table of Contents 🗒

  * [Installations](#installations)

  * [Usage](#usage)
  
  * [Contributors](#contributors)

  * [Test](#tests)

  * [Questions](#questions)

  ${renderLicenseLink(data.license)}
  
  ## Installations 

  To install dependencies, run these commands:

  ${data.dependencies}
  
  ## Usage

  ${data.usage}

  ${renderLicenseSect(data.license)}

  ## Contributors

  ${data.contributors}

  ## Tests

  To run tests, run these commands:

  ${data.test}

  ## Questions

  For additional questions, contact me at the email provided below. 

  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}`;
}

module.exports = generateMarkdown;