// cambiare l'hamburger della navbar al click

let navIcon = document.querySelector('#navIcon');
let confirm=true;

navIcon.addEventListener( 'click', ()=> {

    if(confirm ==true){
        
        navIcon.style.transform = 'rotate(180deg)';
        confirm=false;

    }else{

        navIcon.style.transform = 'rotate(0deg)';

        confirm=true;
    }


})

// NAVBAR (cambia il logo allo scroll)

let mainNav =document.querySelector('#mainNav');

let logoCarrello= document.querySelector('#logoCarrello');

let logoShopper= document.querySelector('#logoShopper');

// l'evento scroll si lega al document o window
window.addEventListener('scroll', ()=>{


    if(window.scrollY > 0) {

        mainNav.style.background = 'linear-gradient(rgba(217, 209, 255,0.77), rgba(17, 153, 191, 0.547))';

        logoCarrello.classList.add('d-none');

        logoShopper.classList.remove('d-none');


    }else {

        mainNav.style.background = '#119abf';

        logoShopper.classList.add('d-none');
        
        logoCarrello.classList.remove('d-none');


    
    }
})

// ANIMATE incremento dei numeri 
// CHIAMATA ASINCRONA:

function createInterval(finalNumber, element, speed){

    let counter = 0;

    let interval= setInterval( () => {

        if (counter < finalNumber){

            counter++;
    
            element.innerHTML = counter;
    
        }else{
    
            clearInterval(interval);
    
        }

    // }, interval )
    }, speed)


}

let firstSpan=document.querySelector('#first-span');
let secondSpan=document.querySelector('#second-span');
let thirdSpan=document.querySelector('#third-span');

// INTERSECTION OBSERVER

let h2Test =document.querySelector('#h2Test');

let intersectionInterval = true;

// Utilizziamo una variabile di appoggio per indicare che il contatore deve partire solo una volta al caricamento della pagina e non ogni volta
// che scrolliamo la pagina. 

let observer = new IntersectionObserver(
    
    (entries)=> {

        entries.forEach( (entry) => {

            if (entry.isIntersecting && intersectionInterval){

                createInterval(300, firstSpan, 1);
                createInterval(500, secondSpan, 1);
                createInterval(200, thirdSpan, 1);

                intersectionInterval=false;

            }
        })

    }
    
    )

observer.observe(h2Test);

// ABBIAMO CATTURATO L'H2 > NELLA VARIABILE OBSERVER ABBIAMO INIZIALIZZATO IL METODO PRECOSTRUITO intersectionObserver() con la KEYWORD NEW >
// QUESTO METODO VUOLE UN PARAMETRO FORMALE, ENTRIES (PER INDICARE TUTTE LE COSE CHE INCONTRI); QUESTO METODO RICHIEDE IL FOREACH PERCHE' DEVE 
// CONTROLLARE TUTTI GLI ELEMENTI ENTRY (ANCHE UNO SOLO). PER OGNI ENTRY CHE TROVI SE è INTERSECATO (entry.isIntersecting) COMPI UN'AZIONE.
// SI RICHIAMA ESTERNAMENTE CON il metodo observe().
// h2 test è l'entries.


// entries corrisponde all'elemento che deve cambiare allo scroll, quindi l'h2 in questo caso;


// SWIPER:




// MOUSE ENTER
let guitars = document.querySelectorAll('.fa-guitar');

let columns = document.querySelectorAll('.col-custom');

let columnsConfirm = false;

columns.forEach((colonna, i)=>{

    colonna.addEventListener('mouseenter', ()=>{

        guitars[i].classList.add('text-pink');
        guitars[i].classList.remove('text-skyblue');



    })

    colonna.addEventListener('mouseleave', ()=>{

        if (columnsConfirm == false){

        guitars[i].classList.remove('text-pink');
        guitars[i].classList.add('text-lightYellow');

        columnsConfirm= true;


        } else{
        
        columnsConfirm=false;
        guitars[i].classList.remove('text-lightYellow');
        guitars[i].classList.add('text-skyblue');


        }


    })



})




// columns.forEach( (colonna, i) => {

//     colonna.addEventListener('mouseenter', () => {

//         guitars[i].classList.remove('text-skyblue');

//         guitars[i].classList.add('text-lightBlue');

//     })

//     colonna.addEventListener('mouseleave', ()=> {

//         if (columnsConfirm == false){

           
//             guitars[i].classList.add('text-lightYellow');

//             guitars[i].classList.remove('text-lightBlue');

//             columnsConfirm = true;
        
//         }else {

//             columnsConfirm = false;

//             guitars[i].classList.remove('text-lightYellow');
            
//             guitars[i].classList.add('text-skyblue');
            


//         }

       
//     })

// })

// Cards creazione card annunci 

let cardWrapper = document.querySelector('#cardWrapper');

let announcements=[

    {name: 'Harry potter e la pietra filosofale', category : 'Libri', price: 15, description: 'Le fantastiche avventure di Harry Potter'},
    {name: 'Camicia nera', category : 'Abiti', price: 25, description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {name: 'Stivaletto di pelle', category : 'Scarpe', price: 50, description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {name: 'Cappotto di lana', category : 'Giacche&Cappotti', price: 65, description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {name: 'Harry potter e la pietra filosofale', category : 'Libri', price: 15, description: 'Le fantastiche avventure di Harry Potter'},
    {name: 'Camicia nera', category : 'Abiti', price: 25, description: 'Il classico tubino nero che non può mancare nel tuo armadio'},
    {name: 'Stivaletto di pelle', category : 'Scarpe', price: 50, description: 'Stivaletto in eco pelle davvero versatile'},
    {name: 'Cappotto di lana', category : 'Giacche&Cappotti', price: 65, description: 'Cappotto di lana dalla linea classica'},
  
  
]

// Per rendere le card tutte uguali anche se i titoli sono lunghi:

function truncateString(string){

    if(string.length > 15){

        let splitted=string.split(' ')[0] + ' ' + string.split(' ')[1] + '...';

        return splitted;

    }else{
        return string;
    }
    
}

announcements.forEach((annuncio, i) =>{

    if ( i >= (announcements.length -4)){

    let div = document.createElement ('div');

    div.classList.add('col-12', 'col-md-6', 'col-lg-3');

    div.innerHTML = `

        <div class="card" style="width: 18rem;">

          <img src="https://picsum.photos/${300 + i}" class="card-img-top" alt="...">

          <div class="card-body">

            <h5 class="card-title fs-1 fw-bold" title="${annuncio.name}"> ${truncateString(annuncio.name)}</h5>
            <p class="card-text fs-4">${annuncio.price} €</p>

            <div class="d-flex justify-content-end" data-bs-toggle="modal" data-bs-target="#${annuncio.category}">
              <a href="#" class="card-anchor">Dettagli</a>
            </div>
            
          </div>
        </div>

      </div>

      <div class="modal fade" id="${annuncio.category}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content fs-2">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${annuncio.name}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
    
            <img src="https://picsum.photos/${300 + i}" class="img-fluid d-block mx-auto" alt="...">
    
            <p class="lead my-3">${annuncio.description} </p>

            <p class="lead my-3">${annuncio.price} € </p>
    
          </div>
          
        </div>
      </div>
    </div>


    `

    cardWrapper.appendChild(div);
}

})


// Uso della funzione FETCH (per creare dei filtri prima indipendenti e poi collegati tra loro): 

// fetch ('./annunci.json').then( (response)=> response.json()).then((data)=> {

//     let categoryWrapper = document.querySelector('#categoryWrapper');

//     function setCategoryFilters(){

//         let categories = data.map((annuncio)=> annuncio.category);

//         let uniqueCategories =[];

//         categories.forEach((category)=>{

//             if(!uniqueCategories.includes(category)){
//                 uniqueCategories.push(category);
//             }
//         })
//     }





// })