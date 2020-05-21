/*
4º exercício
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>

Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
*/

const ul = document.querySelector('ul');
const input = document.getElementsByName('nome')[0];

var nomes = ["Diego", "Gabriel", "Lucas"];

function adicionar(){
    nomes.push(input.value);
    input.value = '';
    lista();
}

function lista(){
    ul.innerHTML = '';
    nomes.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    })
}

lista();