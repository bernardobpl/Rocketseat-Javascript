/*
1º exercício
Crie uma função que dado o objeto a seguir:

var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};

Retorne o seguinte conteúdo:

O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293. 
*/

const p = document.querySelector('p');
const rua = document.getElementById('Rua');
const numero = document.getElementById('Numero');
const bairro = document.getElementById('Bairro');
const cidade = document.getElementById('Cidade');
const uf = document.getElementById('Uf');

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function novoend(){
    console.log("entrou");
    endereco = {
        rua: rua.value,
        numero: numero.value,
        bairro: bairro.value,
        cidade: cidade.value,
        uf: uf.value,
    }

    p.innerHTML = adress();
}

function adress(){
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.` 
}

p.innerHTML = adress();