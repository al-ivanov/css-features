document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuNav = document.querySelector('.menu-nav');

    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('menu-btn_active');
        menuNav.classList.toggle('menu-nav_active');
    });
});