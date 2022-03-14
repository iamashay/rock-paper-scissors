const startContainer = document.querySelector('#startContainer');
const startBut = document.querySelector('#startBut');

startBut.addEventListener('click', () => {
    startContainer.style.animation = "remove 1s";
    setTimeout(() => {
        startContainer.style.display = "none";
    }, 1000)
});