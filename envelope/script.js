document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');

    envelope.addEventListener('click', function(e) {
        //e.preventDefault();
        const envelopeTop = document.querySelector('.envelope__top');
        envelopeTop.classList.toggle('envelope__top_close');
    });
});