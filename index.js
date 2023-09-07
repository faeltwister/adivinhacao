import readline from 'readline-sync'
import chalk from 'chalk'

let maxNumber;
let level;

function wellcome(){
    console.log(chalk.bgBlueBright.bgBlack("Bem-vindo ao jogo de advinhação"));
    console.log("------------------------------");
}


function Tela(){

    console.log(("Escolha o nível de dificuldade"));
    console.log("------------------------------")
    console.log(chalk.blue("[1]Fácil - (Número de 1 a 10)"));
    console.log(chalk.yellow("[2]Médio - (Número de 1 a 50)"));
    console.log(chalk.red("[3]Difícil - (Número de 1 a 100)"));
    level = parseInt(readline.question("Digite a dificuldade: "));
    
}

function VerificarNivel() {
    while (level >= 4) {
        console.log("****************")
        console.log(chalk.bgRed.white("Entre com um número válido!"));
        VerificarInt();
        Tela();
    }
    
}

function VerificarInt(){
    while (!Number.isInteger(level)) {
        console.log("****************")
        console.log(chalk.bgRed.white("Entre com um número inteiro de 1 a 3"));
        Tela();
        VerificarNivel()
    }
    
}


wellcome();
Tela();
VerificarNivel();
VerificarInt();





switch (level) {
    case 1:
        maxNumber = 10;
        console.log("Você escolheu o nível fácil!");
        break;

    case 2:
        maxNumber = 50;
        console.log("Você escolheu o nível médio");
        break;

    case 3:
        maxNumber = 100;
        console.log("Você escolheu o nível difícil!");
        break;

    
}
    







