document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('menu-btn_active');
    });
});