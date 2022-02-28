var num1 = parseFloat(window.prompt("Insira um valor:"));
var num2 = parseFloat(window.prompt("Insira outro valor:"));
var rest = 0.0;

// Adição
rest = num1 + num2;
document.write("Soma: " + rest + "<br>");

// Subtração
rest = num1 - num2;
document.write("Subtração: " + rest + "<br>");

//Divisão
rest = num1 / num2;
document.write("Divisão: " + rest + "<br>");

//Multiplicação
rest = num1 * num2;
document.write("Mutiplicação: " + rest + "<br>");

//Resto de Divisão
rest = num1 % num2;
document.write("Resto da divisão: " + rest + "<br>");

// Menor
rest = num1 > num2;
document.write(rest + "<br>");

// Maior
rest = num1 < num2;
document.write(rest + "<br>");

// Igual
rest = num1 = num2;
document.write(rest + "<br>");


