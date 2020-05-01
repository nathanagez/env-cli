"use strict";
const inquirer = require("inquirer");
const dotenv = require("dotenv");
const fs = require("fs");
const glob = require("glob");

function handleVariables(variables, environmentName) {
  inquirer.prompt(variables).then((answers) => {
    var wstream = fs.createWriteStream(environmentName, {
      flags: "a+",
    });
    for (let [key, value] of Object.entries(answers)) {
      const line = `${key}='${value}'\n`;
      wstream.write(line);
    }
    wstream.end();
  });
}

function getVariablesFromSample(questions) {
  return new Promise(function (resolve, reject) {
    inquirer.prompt(questions).then((answers) => {
      const result = dotenv.config({ path: answers.environment_file });
      const sampleVariables = [];
      if (result.error) {
        reject(result.error);
      }

      for (let [key, value] of Object.entries(result.parsed)) {
        sampleVariables.push({
          type: "input",
          name: key,
          message: key,
          default: value,
        });
      }
      resolve({ sampleVariables, environmentName: answers.environment_name });
    });
  });
}

glob(".*", async (err, files) => {
  if (err) {
    throw new Error(err.toString());
  }
  const questions = [
    {
      type: "rawlist",
      name: "environment_file",
      message: "Which .env template would you use ?",
      choices: files,
    },
    {
      type: "input",
      name: "environment_name",
      message: "Name of your environment file",
      default: ".env",
    },
  ];
  const { sampleVariables, environmentName } = await getVariablesFromSample(
    questions
  );
  handleVariables(sampleVariables, environmentName);
});
