// att 1
var num = 10;
var im;

document.write("<h1>Impares</h1>")

    for (im = 1; im < 10; im++) {
        if (num[im] % 2 != 1) {
            document.write(im + "<br/>");
    } 
    }; 

// att 2

document.write('<h1>Soma de 1 ate 100</h1>');
var i;
var count = 0;

for(i = 0; i <= 100; i++){
    count = (count + i)
    document.write((count) +'<br>');
}; 

// att 3

var names = [
    'João',
    'Jose',
    'Maria',
    'Sebastiao',
    'Antonio',
];

document.write('<h1>Exibir nomes de ate 4 letras</h1>');
var i;

for(i = 0; i <= names.length; i++){
    if(names[i].length === 4){
        document.write((names[i]) +'<br>');
    }
}; 