document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.container');

    card.addEventListener('click', function(e) {
        this.classList.toggle('container-origin');
    });
});