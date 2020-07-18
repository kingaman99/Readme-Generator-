const generateMarkDown = require("./utils/generateMarkdown")
const fs = require("fs")
const inq = require("inquirer")



const questions = [
"whats your favorite food","whats your favorite shirt"
];

// const markdown = generateMarkDown({
    // title: "testing write file"
// })

// writeToFile("test.md",markdown)
promptuser()

function promptuser(){
    inq
    .prompt([
            {
            name: 'faveReptile',
            message: 'What is your favorite reptile?',
            },
            {
                name: "favebaksetballplayer",
                message:"whats is your favorite basketball player?",
            },
            {
                name:"desc",
                message: "what is your project discription",
            }
        ])
        .then(answers => {
            console.info(answers);
            console.log(generateMarkDown(answers))
        });
    // inq.prompt(["test 1"])
    // .then(answers => {
    //     console.log(answers)
    // })
    // .catch(error =>{
    //     console.error(error)
        
    // }
    // )
}



function writeToFile(fileName, data) {
    console.log(`wrighting to file ${fileName}`)
    fs.writeFileSync(fileName,data)
console.log(`"file wright complete`)

}

function init() {

}

init();
