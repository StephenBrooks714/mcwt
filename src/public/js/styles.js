// on scroll make id sideNav to visible
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("sideNav").style.display = "block";
    } else {
        document.getElementById("sideNav").style.display = "none";
    }
}