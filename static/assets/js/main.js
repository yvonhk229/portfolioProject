
/*YYYYYYYYYY CHANGE BACKGROUND HEADER YYYYYYYYYY*/
function scrollHeader() { 
    const header = document.getElementById('header')
    /*Y When the scrollY is greater than 50 viewport height, add the scroll-header class to the header tag Y*/
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

/*YYYYYYYYYY About EFFECTS YYYYYYYYYY*/ 
function slider(e) {
    document.querySelector('.about_description-item') = e
}

window.addEventListener('scroll', scrollHeader)


/*YYYYYYYYYY SERVICES MODAL YYYYYYYYYY*/ 
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})


/*YYYYYYYYYY MIXITUP FILTER PORTFOLIO YYYYYYYYYY*/
let mixerPortfolio = mixitup ('.work_container', {
    selectors : {
        target : '.work1_card'
    },
    animation: {
        duration: 300
    }
});


/*YYYYYYYYYY Link Active Work YYYYYYYYYY*/
 const linkWork = document.querySelectorAll('.work_item')
 function activeWork() {
     linkWork.forEach(L => L.classList.remove('active-work'))
     this.classList.add('active-work')
 }

 linkWork.forEach(L => L.addEventListener('click', activeWork))


/*YYYYYYYYYY SWIPER TESTIMONIAL YYYYYYYYYY
let swiperTestimonial = new Swiper(".testimonial_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints:{
        576: {
            slidesPerPiew: 2,
        },
        768: {
            slidesPerPiew: 2,
            spaceBetween: 48,
        },
    },   
})*/

/*YYYYYYYYYY SCROLL SECTIONS ACTIVE LINK YYYYYYYYYY*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*YYYYYYYYYY  LIGHT  DARK THEME YYYYYYYYYY
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'
 
//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


//We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light' 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

//We validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})*/

/*YYYYYYYYYY SCROLL REVEAL ANIMATION YYYYYYYYYY*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
    // reset:true,

})

sr.reveal(`.home_data`)
sr.reveal(`.home_handle`, {delay:700, origin: 'left'})
sr.reveal(`.home_social, .home_scroll `, {delay:900, origin: 'left'})


/*YYYYYYYYYY CHANGE BACKGROUND HEADER YYYYYYYYYY
var typed = Typed('.animate', {
    String : [
        "Analyst",
        "Developer",
        "Freelancer"
    ],
    typedSpeed: 50,
    backSpeed: 50,
    loop: true
});*/ 


/*YYYYYYYYYY CHANGE BACKGROUND HEADER YYYYYYYYYY
const textAnim = document.querySelector('h4');

new Typewriter = (textAnim, {
    //deleteSpeed
})
.typedString('Analyst')
.pauseFor(300)
.start( )*/
/*YYYYYYYYYY CHANGE BACKGROUND HEADER YYYYYYYYYY*/