

/*---------- VARIÁVEIS ---------- */

let contador = 0;
var numero_atual = document.getElementById('numero-atual');



/*---------- ADD_EVENT_LISTENER (ADICIONANDO UM ESCUTADOR DE EVENTOS) ----------*/

document.getElementById("btn_zerar").addEventListener("click",zerarContador);



/*---------- FUNÇÕES ON_CLICK ----------*/

function incrementarContador() {
	contador++;
	numero_atual.innerHTML = contador;
    limiteNumerico();
    numeroNegativo();
}

function decrementarContador() {
	contador--;
	numero_atual.innerHTML = contador;
    limiteNumerico();
    numeroNegativo();
}



/*---------- FUNÇÕES CLICK ----------*/

function zerarContador(){
    contador=0;
    numeroNegativo();
    limiteNumerico();
    numero_atual.innerHTML =0;
}



/*---------- FUNÇÕES INTERNAS ----------*/

function limiteNumerico(){
    if(contador>=10){
       document.getElementById("btn_adicionar").disabled = true;
    }else{
        document.getElementById("btn_adicionar").disabled = false;
    }

    if(contador<=-10){
        document.getElementById("btn_subtrair").disabled = true;
     }else{
        document.getElementById("btn_subtrair").disabled = false;
     }
}

function numeroNegativo(){
    if(contador<0){
        numero_atual.style.color='red';
     }else{
        numero_atual.style.color='black';
     }
}

