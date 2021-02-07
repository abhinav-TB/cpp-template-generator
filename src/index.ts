// #!/usr/bin/env node
export {};
var inquirer = require('inquirer');
const fs=require('fs');
const user=process.env.USER

var args:String[]=process.argv;
var name=args[2];
let filenames = fs.readdirSync(`/home/${user}/cpp_templates`);
// filenames.forEach(fi=>{
//   console.log(fiee);
// })

inquirer
  .prompt([
   
    {
        type:'list',message:"choose a template",name:"template",choices:filenames
    }
  ])
  .then((answers: { template: any; }) => {
    

    const cwd =process.cwd();
    // writeFileSync(path+'/template.cpp',template);
    fs.readFileSync(`/home/${user}/cpp_templates/${answers.template}`, "utf8");
    fs.copyFile(`/home/${user}/cpp_templates/${answers.template}`,cwd+`/${name}.cpp`,(err: any)=>{
        // console.log(err);
    })
    console.log("your template is ready 🎉");
  })
  .catch((error: any) => {
    console.log(error)
  });
