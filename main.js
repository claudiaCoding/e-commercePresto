// icona hamburger
let closedBook = document.querySelector('#closedBook');

let openBook = document.querySelector('#openBook');

let bottone = document.querySelector('#bottone'); 

let headerId = document.querySelector('#headerId');

let confirm = true;


bottone.addEventListener( 'click', ()=> {

    if(confirm == true){
    
    closedBook.classList.add('d-none');

    openBook.classList.remove('d-none');

    headerId.classList.add('just-marginTop');

    confirm = false;

    }else{

    openBook.classList.add('d-none');

    closedBook.classList.remove('d-none');

    headerId.classList.remove('just-marginTop');

    

    confirm = true;

    }

})

// testo card

let cardWrapper = document.querySelector('#cardWrapper');

let cards = [

    {img : './media/janeEyre.jpg', titolo : 'Jane Eyre, il romanzo della mia vita!', descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, alias facere provident consequuntur architecto eius nihil iure a assumenda tenetur ab maxime, expedita, quia magni adipisci tempore! Fugit, odit expedita'},

    {img : './media/janeEyre.jpg', titolo : 'Jane Eyre, il romanzo della mia vita!', descrizione : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, alias facere provident consequuntur architecto eius nihil iure a assumenda tenetur ab maxime, expedita, quia magni adipisci tempore! Fugit, odit expedita'},

]

function truncateString(string){

    if(string.length > 15){

        let splitted=string.split(' ')[0] + ' ' + string.split(' ')[1] + '...';

        return splitted;

    }else{
        return string;
    }
    
}

cards.forEach((card, i) =>{

    if ( i >= (cards.length -4)){

        let div = document.createElement('div');

        div.classList.add('card', 'text-center', 'bg-biancoAntico', 'text-corallo', 'mt-5');

        div.innerHTML = `
            
            <img src="${card.img}" class="card-img-top" alt="...">

            <div class="card-body">

            <h5 class="card-title">${card.titolo}</h5>
            <p class="card-text">${truncateString(card.descrizione)}</p>
            <a href="#" class="btn bottone-leggimi">Leggimi</a>
            
            </div>
        
        `
    
        cardWrapper.appendChild(div);
        
    }

})