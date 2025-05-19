const prompt = require('prompt-sync')()

/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 utilizando uma estrutura de controle if. */

let numero = undefined;

numero = Number(prompt(`Digite um numero: `))

if(numero % 2 === 0) {
    console.log(`Numero ${numero} é par!`)
} else if (numero !== NaN) {
     console.log(`Numero invalido!`)
} else {
    console.log(`Numero ${numero} é impar!`)
}

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

let crianca = 12;
let adolescente = 17;
let adulto = 18;
let idoso = 60;
let idadePessoa = 0;

idadePessoa = Number(prompt(`Digite sua idade: `));

if(idadePessoa <= crianca) {
    console.log(`Você tem ${idadePessoa} anos, categoria: criança`);
} else if (idadePessoa <= adolescente){
    console.log(`Você tem ${idadePessoa} anos, categoria: adolescente`);
} else if (idadePessoa >= adulto && idadePessoa < 60){
    console.log(`Você tem ${idadePessoa} anos, categoria: adulto`);
} else if (idadePessoa >= idoso){
    console.log(`Você tem ${idadePessoa} anos, categoria: idoso`);
} else {
    if (idadePessoa !== NaN) {
   console.log(`Erro: idade inválida`)
}
}
