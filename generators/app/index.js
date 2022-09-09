"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the groundbreaking ${chalk.red(
          "generator-rn-starter"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "What the project name?",
        default: "rn-template"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const projectName = this.props.projectName;
    this.fs.copy(this.sourceRoot(), this.destinationPath(projectName));
  }

  install() {
    this.env.options.nodePackageManager = "yarn";
  }
};
