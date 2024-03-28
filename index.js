#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; //Dollar
let pinCode = 1234;
let pin_Answer = await inquirer.prompt([
    { message: "Enter Your pincode", type: "number", name: "pin" }
]);
if (pin_Answer.pin === pinCode) {
    console.log(chalk.yellowBright("Welcome to your Account"));
    let userOperation_Answer = await inquirer.prompt([
        { message: "select Operation", type: "list", name: "operation", choices: ["withdraw", "fast cash", "check balance"], },
    ]);
    if (userOperation_Answer.operation === "withdraw") {
        let enteramount_Answer = await inquirer.prompt([
            { message: "Enter your amount", type: "number", name: "amount" },
        ]);
        if (enteramount_Answer.amount > myBalance) {
            console.log(chalk.gray("Insufficient balance"));
        }
        else {
            console.log(chalk.greenBright(`Your Remaining Balance is ${myBalance - enteramount_Answer.amount}`));
        }
    }
    else if (userOperation_Answer.operation === "fast cash") {
        let fastcash_Answer = await inquirer.prompt([
            { message: "Select the following amount", type: "list", name: "fastcash", choices: ["1000", "5000", "10000"] }
        ]);
        if (fastcash_Answer.fastcash === "1000") {
            console.log(chalk.greenBright(`Your Remaining Balance is ${myBalance - fastcash_Answer.fastcash}`));
        }
        else if (fastcash_Answer.fastcash === "5000") {
            console.log(chalk.greenBright(`Your Remaining Balance is ${myBalance - fastcash_Answer.fastcash}`));
        }
        else if (fastcash_Answer.fastcash === "10000") {
            console.log(chalk.greenBright(`Your Remaining Balance is ${myBalance - fastcash_Answer.fastcash}`));
        }
    }
    else if (userOperation_Answer.operation === "check balance") {
        console.log(chalk.greenBright(`Your Balance is ${myBalance}`));
    }
} //pincode ka bracket
else {
    console.log(chalk.redBright("Incorrect Pin Code"));
}
