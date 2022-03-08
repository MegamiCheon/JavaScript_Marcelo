/* var idade = prompt("Digite sua idade:")

if (idade >= 18){
    document.write("O usuário pode comprar. É maior de idade. ")
} else if (idade >= 60) {
    document.write("O usuário não pode comprar. É de melhor idade.")
} else {
    document.write("O usuário não pode comprar. É de menor de idade.")
} */

/* var valpro = 30
if (valpro <= 10){
    document.write("Permitido apenas compra à vista");
} else if (valpro > 10 && valpro <= 20){
    document.write("Permitido financiamento em 3 vezes sem juros");
} else if (valpro >= 20 && valpro <= 60){
    document.write("Permitido financiamento em 6 vezes sem juros");
} else {
    document.write("Permitido financiamento em 12 vezes sem juros");
} */

function cine() {

var cod = document.getElementById("num").value;

if (cod == 1) {
    document.write('Seu filme é <b>The Batman</b>, na sala 001');
} else if (cod == 2) {
    document.write('Seu filme é <b>Uncharted</b>, na sala 002');
} else if (cod == 3) {
    document.write('Seu filme é <b>Urisinhos carinhosos</b>, na sala 003');
} else if (cod == 4) {
    document.write('Seu filme é <b>Exorcismo Sagrado</b>, na sala 004');
} else if (cod == 5) {
    document.write('Seu filme é <b>Coração de Fogo</b>, na sala 005');
}
}