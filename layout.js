const startContainer = document.querySelector('#startContainer');
const startBut = document.querySelector('#startBut');
const playContainer = document.querySelector('#playContainer');
const restartBut = document.querySelector('#restartBut');


startBut.addEventListener('click', () => {
    startContainer.style.animation = "remove 0.5s";
    setTimeout(() => {
        startContainer.style.display = "none";
        playContainer.style.display = "flex";
        startContainer.style.animation = "";

    }, 500)
});

restartBut.addEventListener('click', () => {
    playContainer.style.animation = "remove 0.5s";
    setTimeout(() => {
        playContainer.style.display = "none";
        startContainer.style.display = "flex";
        playContainer.style.animation = "";

    }, 500)
});
