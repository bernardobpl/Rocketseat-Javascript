/*
2º exercício
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
*/
const container = document.getElementById('container');

function novo(){
    let quadrado = document.createElement('div');
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = 'red';
    quadrado.style.borderStyle = 'solid';
    quadrado.style.borderWidth = '2px';
    quadrado.style.borderColor = 'black';
    quadrado.addEventListener('mouseover', () => {quadrado.style.backgroundColor = getRandomColor();});
    quadrado.addEventListener('mouseout', () => {quadrado.style.backgroundColor = 'red';});

    container.appendChild(quadrado);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}