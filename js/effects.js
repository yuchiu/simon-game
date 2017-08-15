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

    function playSound(sound) {
        if (sound.paused)
            sound.play();
        else {
            sound.currentTime = 0
        }
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
