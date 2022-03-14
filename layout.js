const container = document.querySelector('#container');
const startBut = document.querySelector('#startBut');

startBut.addEventListener('click', () => {
    container.style.animation = "remove 1s";
});