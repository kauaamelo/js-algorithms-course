const prompt = require('prompt-sync')()

/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 utilizando uma estrutura de controle if. */

let numero = 0;

numero = Number(prompt(`1 Exercicio \nDigite um numero: `))

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

idadePessoa = Number(prompt(`2 Exercicio \nDigite sua idade: `));

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

/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

let reprovado = 4;
let recuperacao = 5;
let aprovado = 10;
let nota = 0;

nota = Number(prompt(`3 Exercicio \nDigite a nota da prova: `));

if(nota <= reprovado) {
    console.log(`Você tirou ${nota} --- Reprovado`);
} else if (nota >= recuperacao && nota <= 6){
    console.log(`Você tirou ${nota} --- Recuperação`);
} else if (nota >= 7 && nota <= aprovado){
    console.log(`Você tirou ${nota} --- Aprovado`);
} else {
    if (nota !== NaN) {
        console.log(`Erro: nota inválida`);
    }
}

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

let opcao = undefined;

opcao = Number(prompt(`Você só pode escolher apenas um desejo: \n1 - Dinheiro\n2 - Amor\n3 - Ser Dev Java `));

switch(opcao) {
    case 1:
        console.log(`Parabéns você escolheu Dinheiro`)
        break;
    case 2:
        console.log(`Parabéns você escolheu Amor`)
        break;
    case 3:
        console.log(`Parabéns você entrou pro time!`)
        break;
}

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

let peso = 0;
let altura = 0;
let resultadoImc = 0;

peso = Number(prompt(`Digite o seu peso: `));
altura = prompt(`Digite o seu altura: `);

let alturaConvertida = parseFloat(altura.replace(",", "."));

alturaQuadrado = alturaConvertida * alturaConvertida;
resultadoImc = peso / alturaQuadrado;

if(resultadoImc < 18.5) {
    console.log(`Abaixo do peso - IMC: ${resultadoImc.toFixed(2)}`)
} else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
    console.log(`Peso ideal - IMC: ${resultadoImc.toFixed(2)}`)
} else if (resultadoImc >= 25 && resultadoImc < 30) {
    console.log(`Acima do peso - IMC: ${resultadoImc.toFixed(2)}`)
} else {
    console.log(`Obesidade - IMC: ${resultadoImc.toFixed(2)}`)
}

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. */

let valorA = 0;
let valorB = 0;
let valorC = 0;

valorA = Number(prompt(`Digite o primeiro valor do triangulo: `));
valorB = Number(prompt(`Digite o segundo valor do triangulo: `));
valorC = Number(prompt(`Digite o terceiro valor do triangulo: `));

somaAeB = valorA + valorB
somaAeC = valorA + valorC
somaBeC = valorB + valorC

trianguloValido = somaAeB > valorC && somaAeC > valorB && somaBeC > valorA

if(trianguloValido) {
    console.log(`É um triangulo!`)

    if((valorA == valorB) && (valorC == valorA)){
    console.log(`Triangulo: equilátero (todos os lados são iguais).`)
} else if((valorA == valorB) && (valorA !== valorC)){
    console.log(`Triangulo: isósceles (dois lados são iguais e o terceiro é diferente).`)
} else if((valorA !== valorB) && (valorA !== valorC)){
    console.log(`Triangulo escaleno (todos os lados são diferentes).`)
} else {
    console.log(`Erro: ao realizar calculo`)
}
} else {
    console.log(`Não é um triangulo!`)
}

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

let valorFinal = 0;
let valorMaca = 0.30;
let valorDesconto = 0.25;
let valorFinalDesconto = 0;

let quantidadeMacas = prompt(`Quantas maças você gostaria de comprar ? `);

if(quantidadeMacas < 12) {
    valorFinal = quantidadeMacas * valorMaca
    console.log(`O valor é: ${valorFinal.toFixed(2)} e você comprou: ${quantidadeMacas} maças`)
} else if(quantidadeMacas >= 12){
    valorFinalDesconto = quantidadeMacas * valorDesconto
    console.log(`O valor é: ${valorFinalDesconto.toFixed(2)} e você comprou: ${quantidadeMacas} maças`)
}
