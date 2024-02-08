const divContainerNumeri = document.getElementById('contenitoreNumeri');
const bttnEstrai = document.getElementById('estraiNumero');
let arrayNumeriEstratti = [];

const creaDivConNumeri = () =>{
    for(let i = 0; i < 90; i++){
        const div = document.createElement('div');
        div.className = 'divNumeri';
        div.id = `numero${i+1}`;
        const numero = document.createElement('h3');
        numero.innerText = i +1;
        div.appendChild(numero);
        divContainerNumeri.appendChild(div);
    }
}
 
const estraiNumero = () => {
    let numero = Math.floor((Math.random() * 90) + 1);
    const findNumero = arrayNumeriEstratti.find(element => element === numero )
    if(findNumero){
      return estraiNumero();
    }
    return numero;
}

const gestisciNumeroEstratto = (num) => {
    const numeroEstratto = document.getElementById('numeroEstratto');
    numeroEstratto.innerText = num;
    arrayNumeriEstratti.push(num);
    const idNumeroDiv = document.getElementById(`numero${num}`);
    idNumeroDiv.classList.add('estratto');
}


creaDivConNumeri();
bttnEstrai.addEventListener('click', function(){
    gestisciNumeroEstratto(estraiNumero());
})