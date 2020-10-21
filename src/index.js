#!/usr/bin/env node
var inquirer = require('inquirer');
const fs=require('fs');
import "../cpp templates"


inquirer
  .prompt([
    {
      type:'input',message:"cpp_file name",name:"name"
  },
    {
        type:'list',message:"choose a template",name:"template",choices:['basic','college','cp']
    }
  ])
  .then(answers => {
    

    const cwd =process.cwd();
    // writeFileSync(path+'/template.cpp',template);
    fs.readFileSync(`../cpp templates/${answers.template}.cpp`, "utf8");
    fs.copyFile(`../cpp templates/${answers.template}.cpp`,cwd+`/${answers.name}.cpp`,(err)=>{
        console.log(err);
    })
    console.log("your template is ready 🎉")
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log(error)
    } else {
      console.log(error);
    }
  });