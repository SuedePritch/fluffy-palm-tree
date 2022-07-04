openMenu = () =>{
    menu.classList.toggle('visible')
}
closeMenu =() =>{
    menu.classList.remove('visible')
}

const menu = document.querySelector('.navlink');
const hamburgerEl = document.getElementById('hamburger');
const offClick = document.getElementById('overall-container')
hamburgerEl.addEventListener('click', openMenu)
//close on off click
offClick.addEventListener('click', closeMenu);
