#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter your sentence: ",
        type: "input"
    }
])

const words = answer.sentence.split(" ")

console.log("This is your sentence", words)
console.log(`Your sentence word count is ${words.length}`)