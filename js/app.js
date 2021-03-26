const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');


openMenu.addEventListener('click', show);

closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'block';
    mainMenu.style.top = "0";

}

function close() {
    mainMenu.style.top = '-100%'
}


// page 



// gallery btn 
const galleryBtn = document.getElementById('gallery-btn')

galleryBtn.addEventListener('click', function() {
    const galleryDisplay = document.querySelector('.gallery-area')
    galleryDisplay.style.display = 'block'
    const HomeDisplay = document.querySelector('.home-area')
    HomeDisplay.style.display = 'none'
    const displayPrice = document.querySelector('.price-area');
    displayPrice.style.display = 'none'

})

//contact btn

const priceBtn = document.getElementById('price-btn');
priceBtn.addEventListener('click', function() {
        const displayPrice = document.querySelector('.price-area');
        displayPrice.style.display = 'block'

        const HomeDisplay = document.querySelector('.home-area')
        HomeDisplay.style.display = 'none'
        const DisplayAbout = document.querySelector('.about-area')
        DisplayAbout.style.display = 'none'
        const galleryDisplay = document.querySelector('.gallery-area')
        galleryDisplay.style.display = 'none'
    })
    // about btn 


const aboutBtn = document.getElementById('about-btn');

aboutBtn.addEventListener('click', function() {

    console.log('clicked')
    const DisplayAbout = document.querySelector('.about-area')
    DisplayAbout.style.display = 'block'
    const HomeDisplay = document.querySelector('.home-area')
    HomeDisplay.style.display = 'none'
    const displayPrice = document.querySelector('.price-area');
    displayPrice.style.display = 'none'
    const DisplayContact = document.querySelector('.contact-area');
    DisplayContact.style.display = 'none'
})
const contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', function() {

    const DisplayContact = document.querySelector('.contact-area');
    DisplayContact.style.display = 'block'
    const DisplayAbout = document.querySelector('.about-area')
    DisplayAbout.style.display = 'none'
    const HomeDisplay = document.querySelector('.home-area')
    HomeDisplay.style.display = 'none'
    const displayPrice = document.querySelector('.price-area');
    displayPrice.style.display = 'none'
})