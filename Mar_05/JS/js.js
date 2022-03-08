function calc() {

var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var rest = 0.0;

// Adição
rest = num1 + num2;
document.getElementById("rests").innerHTML ="Soma: " + rest + "<br>";

// Subtração
rest = num1 - num2;
document.getElementById("rests").innerHTML ="Subtração: " + rest + "<br>";

//Divisão
rest = num1 / num2;
document.getElementById("rests").innerHTML ="Divisão: " + rest + "<br>";

//Multiplicação
rest = num1 * num2;
document.getElementById("rests").innerHTML ="Mutiplicação: " + rest + "<br>";

//Resto de Divisão
rest = num1 % num2;
document.getElementById("rests").innerHTML ="Resto da divisão: " + rest + "<br>";

// Menor
rest = num1 > num2;
document.getElementById("rests").innerHTML ="É " + rest + "<br>";

// Maior
rest = num1 < num2;
document.getElementById("rests").innerHTML ="É " + rest + "<br>";

}