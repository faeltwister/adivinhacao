import readline from 'readline-sync'
import chalk from 'chalk'

let numeroMax;
let level;
let tentativa = 0
let numberParaAcertar;

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

function Tentativa() {
    while(true){
        tentativa++
        const usuarioTentativa = parseInt(readline.question("Chute um numero: "));
        if(usuarioTentativa === numberParaAcertar ){
            console.log(chalk.green("Parabéns, Você acertou!"));
            console.log(`Você usuou ${tentativa} tentativas.`);
            break;
        }else if(usuarioTentativa < numberParaAcertar){
            console.log(chalk.bgRed.white("O seu palpite foi baixo"));
        }else{
            console.log(chalk.bgBlue.white("O seu palpite foi muito alto"));    
        }
    }
}

function Game(){
    switch (level) {
    
        case 1:
            
            numeroMax = 10;
            numberParaAcertar = Math.floor(Math.random()* numeroMax) + 1;
            console.log("Você escolheu o nível fácil!");
            Tentativa();
            break;
    
        case 2:
            numeroMax = 50;
            numberParaAcertar = Math.floor(Math.random()* numeroMax) + 1;
            console.log("Você escolheu o nível médio");
            Tentativa();
            break;
    
        case 3:
            numeroMax = 100;
            numberParaAcertar = Math.floor(Math.random()* numeroMax) + 1;
            console.log("Você escolheu o nível difícil!");
            Tentativa();
            break;
    
        
    }
}

wellcome();
Tela();
VerificarNivel();
VerificarInt();
Game();










