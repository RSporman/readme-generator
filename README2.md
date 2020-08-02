I WANT a README generator
SO THAT can quickly create a professional README for a new project Acceptance criteria GIVEN a command-line application that accepts user input WHEN I am prompted for information about my application repository THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions WHEN I enter my project title THEN this is displayed as the title of the README WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests WHEN I choose a license for my application from a list of options THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under WHEN I enter my GitHub username THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README

1. npm init (follow the initialization prompt)
2. npm install require, npm install inquirer to have ready as the require dependancies in the json.package
3. create the prompt questions you want the user to answer when they are generating their generatereadme
after the questions are created and set up
5. create a promise to create a function to be able to carry the response from the prompt object and have it written to “md - markdown file”
which will than create an entire new file containing the user’s input
6. modulize the generatemarkdown.js file by coding     module.export = {generateMarkdown};  at the bottom of the file.

https://drive.google.com/file/d/13LOcExSdHesTpMyowZc_PhXnvRe0hHRs/view
https://rsporman.github.io/readme-generator/
https://github.com/RSporman/readme-generator 
