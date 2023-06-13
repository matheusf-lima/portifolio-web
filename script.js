const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const IconClose = document.querySelector('.icon-close')
const homeContent = document.querySelector('.home-content');
const navbar = document.querySelector('.navbar').querySelectorAll('a');
const redes = document.querySelector('.home-sci');
const homeimg = document.querySelector('.homeanimation');
const idade = document.querySelector('.idade');
const lighMode = document.querySelector('.checkbox');
const html = document.querySelector('html');

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

lighMode.addEventListener('change', function(){
    html.classList.toggle('dark-mode');
});

navbar.forEach(element => {
    element.addEventListener('click', function(){
        navbar.forEach(nav=>nav.classList.remove('active'))

        this.classList.add('active');
        wrapper.classList.remove('active-popup', 'active');
        homeContent.classList.remove('active');
        redes.classList.remove('active');
        homeimg.classList.remove('active');
    })
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});
btnPopup.addEventListener('click', ()=> {
    location.href = "#home";
    wrapper.classList.add('active-popup');
    homeContent.classList.add('active');
    redes.classList.add('active');
    homeimg.classList.add('active');
});
IconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup', 'active');
    homeContent.classList.remove('active');
    redes.classList.remove('active');
    homeimg.classList.remove('active');
});

nacimento = 2002;

idade.innerHTML = new Date().getFullYear() - 2002;

window.addEventListener('scroll', reveal);



function reveal(){
    var reveals = document.querySelectorAll('.group');

    for(var i = 0;i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revelpoint = 100;

        if(revealtop < windowheight - revelpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}