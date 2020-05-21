/*
1º exercício
Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.
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

    container.appendChild(quadrado);
}