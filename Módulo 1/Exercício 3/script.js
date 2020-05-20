/*
3º exercício
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false

Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
*/

const ul = document.querySelector('ul');

var skills = ["Javascript","ReactJS","React Nativa"];

function mostrar(){
    ul.innerHTML='';
    console.log(skills);
    for (let i=0; i<skills.length; i++){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(skills[i]));
        ul.appendChild(li);
    }
}

function adicionar(habilidade){
    console.log("add");
    skills.push(habilidade);
    mostrar();
}

function remover(habilidade){
    console.log("rem");
    let index = skills.indexOf(habilidade);
    skills.splice(index,1);
    mostrar();
}

function temHabilidade(habilidade){
    console.log("procura");
    if(skills.indexOf(habilidade)>=0){
        alert(`Habilidade ${habilidade} existe`);
        console.log(true);
        return true;
    }else {
        alert(`Habilidade ${habilidade} não existe`)
        console.log(false);
        return false;
    }
}
mostrar();
setTimeout(()=>temHabilidade("Javascript"),1000);
