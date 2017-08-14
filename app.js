(function () {
    let redBtn = document.getElementById('red');
    let blueBtn = document.getElementById('blue');
    let yellowBtn = document.getElementById('yellow');
    let greenBtn = document.getElementById('green');
    let startToggleBtn = document.getElementById('startToggle');
    let strictBtn = document.getElementById('strict');
    let counter = document.getElementById('counter');
    let message = document.getElementById('message');
    let startSound = document.getElementById('startSound');
    let strictSound = document.getElementById('strictSound');
    let simonSound = document.getElementById('simonSound');
    let failSound = document.getElementById('failSound');

    let count = 0;
    let order = [];
    let userOrder = [];
    let timer;

    this.gameOn = false;
    this.strictMode = false;


    deactivateBtn();


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
        if (strictMode === false) {
            strictMode = true;
            strictBtn.innerHTML = 'Strict Mode: On';
            strictBtn.classList.add('strictOn');

        } else if (strictMode === true) {
            strictMode = false;
            strictBtn.innerHTML = 'Strict Mode: Off';
            strictBtn.classList.remove('strictOn');
        }

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


    function start() {
        message.innerHTML = 'Good luck.'
        gameOn = true;
        startToggleBtn.innerHTML = 'Restart';
        activateBtn();
        runSimonGame();
    }

    function reset() {
        removeGlow()
        clearTimeout(timer);
        gameOn = false;
        message.innerHTML = 'Click start to play. Toggle strick mode below.'
        startToggleBtn.innerHTML = 'Start';
        count = 0;
        order = [];
        userOrder = [];
        counter.innerHTML = count;
        gameOn = false;
        deactivateBtn();
    }

    function runSimonGame() {
        userOrder = [];
        order.push(generateInstruction());
        counter.innerHTML = order.length;
        //display instructions
        glow(0, order);
    }

    function glow(index, orderArr) {
        deactivateBtn();
        if (index < orderArr.length) {
            timer = setTimeout(function () {
                whichBtnGlow(orderArr[index]);
                index++;
                playSound(simonSound);
                glow(index, orderArr);
            }, 1500);
        } else if (index === orderArr.length) {
            activateBtn();
        }
    }

    function userInput(instruct) {
        userOrder.push(instruct);
        if (order.length > userOrder.length) {
            checkOrder(userOrder.length - 1);
        } else if (order.length === userOrder.length) {
            let bol = checkOrder(userOrder.length - 1);
            if (bol === true) {
                message.innerHTML = 'Good Job!';
                runSimonGame();
            } else {
                message.innerHTML = 'wrong step.';
                glow(0, order);
            }
        }
    }

    function checkOrder(index) {
        if (strictMode === false) {
            if (userOrder[index] !== order[index]) {
                userOrder = [];
                playSound(failSound);
                message.innerHTML = 'wrong step. repeating sequence';
                glow(0, order);
            } else if (userOrder[index] === order[index]) {
                return true;
            }

        } else if (strictMode === true) {
            if (userOrder[index] !== order[index]) {
                playSound(failSound);
                message.innerHTML = 'game restarted. Good Luck.';
                reset();
                start();
            } else if (userOrder[index] === order[index]) {
                return true;
            }
        }
    }

    function generateInstruction() {
        return Math.floor(Math.random() * 4) + 1;
    }

    function whichBtnGlow(btn) {
        if (btn === 1) {
            greenBtn.classList.add('glowing');
            timer = setTimeout(function () {
                removeGlow();
            }, 1400);

        } else if (btn === 2) {
            redBtn.classList.add('glowing')
            timer = setTimeout(function () {
                removeGlow();
            }, 1400);

        } else if (btn === 3) {
            yellowBtn.classList.add('glowing')
            timer = setTimeout(function () {
                removeGlow();
            }, 1400);

        } else if (btn === 4) {
            blueBtn.classList.add('glowing')
            timer = setTimeout(function () {
                removeGlow();
            }, 1400);
        }
    }

    function removeGlow() {
        greenBtn.classList.remove('glowing');
        redBtn.classList.remove('glowing')
        yellowBtn.classList.remove('glowing')
        blueBtn.classList.remove('glowing')
    }

    function activateBtn() {
        redBtn.disabled = false;
        blueBtn.disabled = false;
        yellowBtn.disabled = false;
        greenBtn.disabled = false;
    }

    function deactivateBtn() {
        redBtn.disabled = true;
        blueBtn.disabled = true;
        yellowBtn.disabled = true;
        greenBtn.disabled = true;
    }

    function playSound(sound) {
        if (sound.paused)
            sound.play();
        else {
            sound.currentTime = 0
        }
    }
})();