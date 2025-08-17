const switchBut = document.querySelector('#switch');
const menuSwitchBut = document.querySelector('#m-switch');
const iconMenu = document.querySelector('.m-icon');
const projectPhoto = document.querySelector('.project-img');
const icon = document.querySelector('.icon');
const contactPhoto = document.querySelector('.contact-img');
const skillsPhoto = document.querySelector('.skills-img');
let currentTheme = localStorage.getItem('blog-theme');
const burgerMenu = document.querySelector('.menu');
const links = document.querySelector('.links');
let menuOpen = false;

switchBut.addEventListener('change', () => {
    if (switchBut.checked) {
darkTheme();
    } else {
lightTheme();
    }
});
menuSwitchBut.addEventListener('change', () => {
if (menuSwitchBut.checked) {
darkTheme();
    } else {
lightTheme();
    }
});


burgerMenu.addEventListener('click',()=>{
    if(!menuOpen){
        links.style='display:flex;';
        menuOpen = true;
    }
    else{
         links.style='display:none;';
         menuOpen = false;
    }
})



function darkTheme(){
    switchBut.checked=true;
    menuSwitchBut.checked=true;
        document.documentElement.setAttribute('theme', 'dark');
        projectPhoto.src='images/undraw_project-completed_fwjq.svg';
        contactPhoto.src='images/undraw_quick-chat_3gj8s.svg';
        skillsPhoto.src = 'images/undraw_cool-guy-avatar_qjc4.svg';
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        iconMenu.classList.remove('fa-sun');
        iconMenu.classList.add('fa-moon');
        localStorage.setItem('blog-theme','dark');
}

function lightTheme(){
        switchBut.checked=false;
    menuSwitchBut.checked=false;
        document.documentElement.setAttribute('theme', 'light');
        projectPhoto.src='images/undraw_project-completed_fwjqs.svg'; 
        contactPhoto.src='images/undraw_quick-chat_3gj8.svg';
        skillsPhoto.src = 'images/undraw_cool-guy-avatar_qjc4s.svg';
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        iconMenu.classList.remove('fa-moon');
        iconMenu.classList.add('fa-sun');
        localStorage.setItem('blog-theme','light');
}




function loadThemeFromStorage(){
    if(currentTheme){
        if(currentTheme==='dark'){
            switchBut.checked=true;
            darkTheme();
        }
        else {
            lightTheme();
        }
    }

}

loadThemeFromStorage();