// select Dom Items

const menuBtn = document.querySelector('.menu-btn');


let showMenu = false // set initial show menu state

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close')

        showMenu = true;
    } else {
        menuBtn.classList.remove('close')

        showMenu = false

    }
}

console.log("hello")