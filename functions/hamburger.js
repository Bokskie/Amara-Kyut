document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.header-toggle');
    const navMenu = document.getElementById('nav-menu');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        toggleButton.classList.toggle('active');
    });
});
