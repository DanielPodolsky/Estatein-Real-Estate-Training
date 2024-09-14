// * Close the ad *

let adBtn = document.querySelector('.banner-close');
let banner = document.querySelector('.banner');
// Add
adBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
});
// Remove
adBtn.removeEventListener('click', () => {
    banner.classList.add('hidden');
});

// * Open and close the hamburger *

let hamburgerBtn = document.querySelector('.hamburger-btn');
let hamburgerMenu = document.querySelector('.hamburger-clicked');
// Add
hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'flex';
});

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.style.display = 'none';
});