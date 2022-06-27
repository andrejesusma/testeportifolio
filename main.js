const html = document.querySelector('html')
const checkbox = document.querySelector('#toggle-dark-mode')

checkbox.addEventListener('change', function(){
    html.classList.toggle('dark-mode')
})

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click',function() {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click',function() {
        nav.classList.remove('show')
    })
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767: {
            slidesPerView: 1,
            setWapperSize: true
        }
    }
});


const scrollReveal = new ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
    reset: true
})
scrollReveal.reveal(`
    #home .text, #home .image,
    #about .text, #about .image,
    #services .header, #services .card,
    #testimonials .header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .logo, footer .social
    `,{ interval: 100}
)

const backToTopButton = document.querySelector('.back-to-top')
function backToTop(){
    if(window.scrollY >= 460){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}


const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function menuButtonVisible(){
    if(window.scrollY>=navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight/8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        }else{
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}
window.addEventListener('scroll',function() {
    backToTop()
    menuButtonVisible()
    activateMenuAtCurrentSection()
})

