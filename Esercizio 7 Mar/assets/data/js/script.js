URL = 'https://api.pexels.com/v1/search?query=';
const loadImagesValue = document.getElementById('loadImages');
const loadSecondImagesValue = document.getElementById('loadSecondaryImages');
const arrayCards = document.getElementsByClassName('bd-placeholder-img');
const arrayCardsTitle = document.getElementsByClassName('card-title');


let url0 = '';

async function readImgs (string) {
    try{
        let ask =  await fetch(URL + string,
            {
                headers: {
                    'Authorization': 'cPxSuuVJ73X6S7cCb2L1OjhvaPrJzRH8DRUT2NOVzdWzlNIp31n4Lrcy',
                   
                }
            })
        let response = await ask.json();
        console.log(response);

        
        for(let i=0; i< arrayCards.length; i++){
            arrayCards[i].src = response.photos[i].src.original;
            arrayCardsTitle[i].innerText = response.photos[i].alt;
       
        }
       
       
   
        
    } catch (error){
        console.log(error);
    }
}

window.addEventListener('load', function(){
    init();
})

init = () => {
    loadImagesValue.addEventListener('click', function(e){
        e.preventDefault();
        readImgs('mountain');
       
    })
    
    loadSecondImagesValue.addEventListener('click', function(e){
        e.preventDefault();
        readImgs('sunset');
    
    })
}




   