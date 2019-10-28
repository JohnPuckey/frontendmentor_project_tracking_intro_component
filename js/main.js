// select Dom Items

const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');


let showMenu = false // set initial show menu state

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close')
        menuNav.classList.add('show')


        showMenu = true; // Set menu state


    } else {
        menuBtn.classList.remove('close')
        menuNav.classList.remove('show')


        showMenu = false // Set menu state

    }
}

console.log("hello")