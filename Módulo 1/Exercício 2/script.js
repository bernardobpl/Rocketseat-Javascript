/*
2º exercício
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
 // código aqui
}
pares(32, 321);

*/

const p = document.querySelector('p');

function pares(x,y){
    p.innerHTML='';
    
    if (x==''||y==''){alert("Valor em branco"); return}
    if (x>y){ alert("Intervalo negativo"); return }

    let par = [];
    for (x;x<=y;x++){
        if (x%2 == 0){
            par.push(x);
        }
    }

    p.innerHTML = par;

    return par;
}