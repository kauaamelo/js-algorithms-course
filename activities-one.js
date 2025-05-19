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

