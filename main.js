window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//Contact BUTTONS (CIRCULAR TEXT)

const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 18}deg)">${character}</span>`).join('')
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
},


// responsive for mobiles & tablets
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});


//responsive nav btn bars

const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

// close nav menu on click of menu
nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
})

// const toggle = document.getElementById('toggle_Dark');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//     this.classList.toggle('uil-moon');
//     if(this.classList.toggle('uil-sun')){
//         body.style.background = '--color-bg-1';
//         body.style.color = '--color-primary-variant';
//         body.style.transition = '2s';
//     }else {
//         body.style.background = '--color-bg-1';
//         body.style.color = '--color-primary-variant'
//         body.style.transition = '2s';
//     }
// })