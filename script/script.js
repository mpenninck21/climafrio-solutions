document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navbarItems = document.querySelector('.navbar-items');

    hamburgerButton.addEventListener('click', function () {
        navbarItems.classList.toggle('active');
    });
});
