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