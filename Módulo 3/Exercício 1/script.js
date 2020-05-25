/*
1º exercício
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
 // Retornar uma promise
}
checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });
 */

const p = document.querySelector('p');

function check(idade) {
    var checaIdade = function(idade){
        return new Promise(function (resolve,reject){
            if (idade<18){
                setTimeout(reject,2000);
            } else {
                setTimeout(resolve,2000);
            }
        });
    }
    checaIdade(idade)
        .then(function() {
            p.innerHTML = "Maior que 18";
            console.log("Maior que 18");
        })
        .catch(function() {
            p.innerHTML = "Menor que 18";
            console.log("Menor que 18");
        });
}