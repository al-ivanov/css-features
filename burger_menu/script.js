document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('menu-btn_active');
        menu.classList.toggle('menu_active');
    });
});