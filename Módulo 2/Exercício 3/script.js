/*
3º exercício
A partir do seguinte vetor:

var nomes = ["Diego", "Gabriel", "Lucas"];

Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas
*/

const ul = document.querySelector('ul');
var nomes = ["Diego", "Gabriel", "Lucas"];

(function lista(){
    nomes.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
})();