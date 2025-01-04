// add class dark-bg on scroll down

window.addEventListener('scroll', () => {
    const header = document.getElementById("navbar");
    header.classList.toggle('dark-bg', window.scrollY > 50);
});