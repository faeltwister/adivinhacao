import readline from 'readline-sync'
import chalk from 'chalk'

console.log(chalk.bgBlueBright.bgBlack("Bem-vindo ao jogo de advinhação"));
console.log("------------------------------")
console.log(("Escolha o nível de dificuldade"));
console.log("------------------------------")
console.log(chalk.blue("[1]Fácil - (Número de 1 a 10)"));
console.log(chalk.yellow("[2]Médio - (Número de 1 a 50)"));
console.log(chalk.red("[1]Difícil - (Número de 1 a 100)"));

const level = parseInt(readline.question("Digite a dificuldade: "));
console.log(level);

