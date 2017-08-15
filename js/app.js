let count = 0;
let order = [];
let userOrder = [];
let timer;

this.gameOn = false;
this.strictMode = false;

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

function checkStrictMode() {
    if (strictMode === false) {
        strictMode = true;
        strictBtn.innerHTML = 'Strict Mode: On';
        strictBtn.classList.add('strictOn');

    } else if (strictMode === true) {
        strictMode = false;
        strictBtn.innerHTML = 'Strict Mode: Off';
        strictBtn.classList.remove('strictOn');
    }

}

function runSimonGame() {
    userOrder = [];
    order.push(generateInstruction());
    counter.innerHTML = order.length;
    //display instructions
    glow(0, order);
}

function generateInstruction() {
    return Math.floor(Math.random() * 4) + 1;
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
            message.innerHTML = 'wrong step.';
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