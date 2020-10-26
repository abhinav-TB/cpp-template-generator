#!/usr/bin/env node
var inquirer = require('inquirer');
const fs=require('fs');

var arguments=process.argv;
var name=arguments[2];
let filenames = fs.readdirSync('/home/abhinav/cpp_templates');

inquirer
  .prompt([
   
    {
        type:'list',message:"choose a template",name:"template",choices:filenames
    }
  ])
  .then(answers => {
    

    const cwd =process.cwd();
    // writeFileSync(path+'/template.cpp',template);
    fs.readFileSync(`/home/abhinav/cpp_templates/${answers.template}`, "utf8");
    fs.copyFile(`/home/abhinav/cpp_templates/${answers.template}`,cwd+`/${name}.cpp`,(err)=>{
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
