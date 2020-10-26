#!/usr/bin/env node
var inquirer = require('inquirer');
const fs=require('fs');

var arguments=process.argv;
var name=arguments[2];


inquirer
  .prompt([
    {
        type:'list',message:"choose a template",name:"template",choices:['basic','college','cp']
    }
  ])
  .then(answers => {
    

    const cwd =process.cwd();
    // writeFileSync(path+'/template.cpp',template);
    fs.readFileSync(`/home/abhinav/cpp_templates/${answers.template}.cpp`, "utf8");
    fs.copyFile(`/home/abhinav/cpp_templates/${answers.template}.cpp`,cwd+`/${name}.cpp`,(err)=>{
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
