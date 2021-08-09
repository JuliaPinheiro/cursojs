

/*
//AULA 1
alert("E ai, Js!!");

var nome = "julia pinheiro";
var idade = 22;
var cidade = "São Paulo"
var frase = "Um dia vou ser sênior!"

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(frase.replace("Um dia", "Eu"));
console.log(frase.toLowerCase());


 ARRAY AULA 2

var lista = ["banana", "uva", "maça", "melancia"];



//push acrescenta

lista.push("laranja");
lista.push("melão");

// pop remove o ultimo elemento

lista.pop();


console.log(lista);
console.log(lista[0]);
console.log(lista[2]);


//tamanho
console.log(lista.length);

// imprime ao contrario 

console.log(lista.reverse());


// toString
console.log(lista.toString());


// consegue colocar o que quer

console.log(lista.join("-"));



// dicionario

var fruta ={nome: "banana", cor: "amarela"}

console.log(fruta);
console.log(fruta.cor);



//Aula 03


var idade = prompt ("Qual é a sua idade?");

if (idade>=18){

alert("Maior de idade");

} else {

alert("Menor de idade");

}



var count = 0;

while (count<=5){

console.log(count);

count++;

}


var count;

for (count=0; count<=5; count++){

console.log(count);

}



var d = new Date();

alert(d);
alert(d.getDay());


for(count=0; count <= 5; count++){

console.log(count);

}


// AULA 04





function setReplace(frase, nome, novo_nome){

return frase.replace(nome, novo_nome)

}

alert( setReplace( "Um dia serei sêmior", "Um dia", "Eu"));



function soma (n1,n2){

return n1+n2;

}
*/

function validaidade (idade){

var validar;

if(idade>=18){

validar = true;

return("Maior de idade")
}else{

validar = false;

return("menor de idade")
}

}

var idade = prompt ("Qual é a sua idade?");
console.log(validaidade(idade));