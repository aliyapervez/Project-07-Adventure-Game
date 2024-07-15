#!/usr/bin/env node

import chalk from "chalk";
import inquirer  from "inquirer"

//classes Player & Opponent
class Player{
    name: string;
    fuel: number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
}
fuelIncrease(){
this.fuel = 100   
}
}
class Opponent {
    name: string;
    fuel: number = 100
    constructor(name: string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }    
}
// player name & opponent select
let player = await inquirer.prompt ({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
})
console.log(player.name);

let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select Your Opponent",
    choices : [
        {value:"Skeleton"},
        {value:"Assasin" },
        {value: "Dragon"}
    ]
    
    
})
//gather data
let p1 = new Player(player.name)

let o1 = new Opponent(opponent.select);

do{
    // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({    
        name: "option",
        type: "list",
        message: "Select Your Opponent",
        choices : [
            {value:"Attack"},
            {value:"Drink Portion"},
            {value:"Run For Your Life" }
        ]
        
    });
    if(ask.option == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if (num > 0) {
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You loose better luck next time"));
            process.exit()
        }
    }
        if (num <= 0){
            o1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            if (o1.fuel <= 0){
                console.log(chalk.green.bold.italic("You won"));
                process.exit()
            }
        }
        
    }
    if(ask.option == "Drink Portion"){
     p1.fuelIncrease()
     console.log(chalk.bold.italic(`You drank a healthy portion your fuel is
        ${p1.fuel} `));
    }
    if(ask.option == "Run For Your Life"){
        console.log(chalk.red.bold.italic("You loose better luck next time"));
        process.exit()
    }
}   

// game loop  loop until someone loses or wins

while(true)

