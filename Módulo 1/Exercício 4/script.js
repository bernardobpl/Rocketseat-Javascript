/*
4º exercício
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
*/

const p = document.querySelector('p');

var anosEstudo = 7;

function experiencia(anos){
    p.innerHTML = '';
     if (anos<1  && anos>=0){
        p.innerHTML = "Iniciante";
     } else if (anos>=1 && anos<3){
        p.innerHTML = "Intermediário";
     } else if (anos>=3 && anos<7){
        p.innerHTML = "Avançado";
     } else if (anos>=7){
        p.innerHTML = "Jedi Master";
     } else {
         alert("Não da para classificar");
     }
}

experiencia(anosEstudo);