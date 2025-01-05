// add class dark-bg on scroll down

window.addEventListener('scroll', () => {
    const header = document.getElementById("navbar");
    header.classList.toggle('dark-bg', window.scrollY > 50);
});

function showMenu() {
    if(document.querySelector('.dropdown-items').style.display === 'block') {
        document.querySelector('.dropdown-items').style.display = 'none';
    } else {
        document.querySelector('.dropdown-items').style.display = 'block';
    }
}

function closeMenu() {
    document.querySelector('.dropdown-items').style.display = 'none';
}