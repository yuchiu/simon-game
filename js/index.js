let simonPanel = document.getElementById('simonPanel');
let redBtn = document.getElementById('red');
let blueBtn = document.getElementById('blue');
let yellowBtn = document.getElementById('yellow');
let greenBtn = document.getElementById('green');
let startToggleBtn = document.getElementById('startToggle');
let strictBtn = document.getElementById('strictToggle');
let counter = document.getElementById('counter');
let startSound = document.getElementById('startSound');
let strictSound = document.getElementById('strictSound');
let simonSound = document.getElementById('simonSound');
let failSound = document.getElementById('failSound');


startToggleBtn.addEventListener('click', function () {
    playSound(startSound);
    if (gameOn === false) {
        start();

    } else if (gameOn === true) {
        reset();
    }
})

strictBtn.addEventListener('click', function () {
    playSound(strictSound);
    checkStrictMode();
})
greenBtn.addEventListener('click', function () {
    playSound(simonSound);
    userInput(1);
})

redBtn.addEventListener('click', function () {
    playSound(simonSound);
    userInput(2);
})

yellowBtn.addEventListener('click', function () {
    playSound(simonSound);
    userInput(3);
})
blueBtn.addEventListener('click', function () {
    playSound(simonSound);
    userInput(4);
})