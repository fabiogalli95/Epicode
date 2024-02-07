const inputText = document.getElementById('writeList');
const addBtn = document.getElementById('addBtn');
const listOfThings = document.getElementById('listOfThings');
const errore = document.getElementById('errore');


window.addEventListener('load', init());
function init(){
    errore.style.display = 'none';
}


addBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(inputText.value === ''){
        errore.style.display = 'block';
    }else{
        errore.style.display = 'none';
        const lista = document.createElement('li');   
        lista.innerText = inputText.value;
        lista.addEventListener('click', function(){
            if(lista.style.textDecoration === ''){
                lista.style.textDecoration = 'line-through';
            }else{
                lista.style.textDecoration = '';
            }
           
        })
        const button = document.createElement('button');
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-trash';
        button.appendChild(icon);
        button.addEventListener('click', function(){
            lista.parentNode.removeChild(lista);
        })
        lista.append(button);
        listOfThings.appendChild(lista);
    }
    inputText.value = '';
})




