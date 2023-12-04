/*
- ula-3 variaveis

var latitude = 40.87663;
var longitude = -8.08373;

console.log(latitude)
console.log(longitude);
==================================
- Aula-4 Strings

var nome = "João";  // podem ser usadas aspas duplas
var sobrenome = 'Gomes';  // ou aspas simples
var cpf = '111.111.111-11';  
var telefone = "998887655";
var ddd = '21';
var email = 'joao@gmail.com';
var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

console.log('Nome completo: '+ nome + ' '+ sobrenome);
console.log(ddd + '-'+telefone);
console.log('('+ ddd + ')' + '-'+ telefone);
console.log('Primeira letra do nome: ' + nome[0]);
console.log('Ultima letra do nome: ' + nome[3]);
console.log('Número de caracteres do telefone: '+ telefone.length);
=======================================
- Aula-5 Números



var ano_nascimento = 1986;
var preco = 16.99;  // floats devem ser usadas com ponto, nunca com vírgula.
var temperatura = -5;
var numero_grande = 2.2e45; // números muito grandes podem ser representados em Javascript pela notação exponencial. 
//Neste exemplo, este número significa 2.2 x 1045 

var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2)/2;

console.log('A média é: '+ media);
console.log(Math.pow(num1,4));

var increment = 20;
increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
console.log(increment); // O console mostrará 25

increment = 1;
increment += 5;
console.log(increment);// O console mostrará 6

increment = 10;
increment++;
increment++;
console.log(increment);// O console mostrará 12

increment = 10;
increment--;
increment--;
console.log(increment);// O console mostrará 8

var ddd = 21;
var telefone = 998887655;

var ddd_string = ddd.toString();
var tel_string = telefone.toString();

var telefone_completo = ddd_string + tel_string;

console.log(telefone_completo); // retorna '21998887655'
=============================================================

- Aula-6 Tipo de dados Booleano


var idade = 65;
var teste = idade !== 65;

console.log(teste);

*/
