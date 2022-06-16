// node 01-teste.js  - Chamada de arquivo .js através do terminal
console.log("Hello world!");


// função que retona os números pares de umalista
function retornaNumerosPares(listaNumeros){
    let listaNumerosPares=[];

    for(let i=0; i<listaNumeros.length; i++){
        if(listaNumeros[i] % 2 === 0){
            listaNumerosPares.push(listaNumeros[i]);
        }
    }
    console.log('Lista dos números pares : ',listaNumerosPares);
}

// chamada da função (retornaNumerosPares) passando com parâmetro uma lista de numeros
let listaNumeros=[1,2,3,4,5,6,7,8,9,10];
retornaNumerosPares(listaNumeros);