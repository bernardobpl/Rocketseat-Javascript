/*
5º exercício
Dado o seguinte vetor de objetos:

var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

Escreva uma função que produza o seguinte resultado:

O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.
*/

const ul = document.querySelector('ul');var index;

const usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJs", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];


function user(){
    usuarios.forEach(obj => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${obj.nome} possui as habilidades: ${obj.habilidades.join(', ')}`));
        ul.appendChild(li);
    })
}


function maishab(usuario,habilidade){
    usuarios.map(obj => {
        if(obj.nome == usuario){
            obj.habilidades.push(habilidade);
        }
    })
    ul.innerHTML = '';
    user();
}


function novouser(usuario,habilidade){
    let objuser = {
        nome: usuario,
        habilidades: [habilidade],
    }

    usuarios.push(objuser);

    ul.innerHTML = '';
    user();
}
user();