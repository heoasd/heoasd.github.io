document.addEventListener('DOMContentLoaded', function () {
    const homeButton = document.getElementById('homeButton');
    const aboutmeButton = document.getElementById('aboutmeButton');
    const myworkButton = document.getElementById('myworkButton');
    const contactButton = document.getElementById('contactButton');
    const body = document.body;

    homeButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    aboutmeButton.addEventListener('click', function () {
        window.location.href = ('aboutme.html');
    });

    myworkButton.addEventListener('click', function () {
        window.location.href = ('mywork.html');
    });

    contactButton.addEventListener('click', function () {
        window.location.href = ('contact.html');
    });
});