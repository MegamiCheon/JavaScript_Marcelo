function add() {

var num1 = parseFloat(document.getElementById("num1").value);
var num2 = parseFloat(document.getElementById("num2").value);

var calc = num1 + num2;
document.getElementById("add").value = calc;
}

function sub() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var calc = num1 - num2;
    document.getElementById("sub").value = calc;

}

function mut() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var calc = num1 * num2;
    document.getElementById("mut").value = calc;

}

function div() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var calc = num1 / num2;
    document.getElementById("div").value = calc;

}