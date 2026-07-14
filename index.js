const buttons = document.querySelector(".buttons");
const answerEl = document.querySelector(".Computer");
const resultEl = document.querySelector(".result");
const yourScoreEl = document.querySelector(".yourScore");
const computerScoreEl = document.querySelector(".computerScore");

function randomComputerAnswer() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            answerEl.textContent = '';
            setTimeout(() => {
                answerEl.textContent = '👊';
            }, 200);
            return computerAnswer = '👊';
            answerEl.style.backgroundColor = '#ff0000';
            break;
        case 2:
            answerEl.textContent = '';
            setTimeout(() => {
                answerEl.textContent = '🖐️';
            }, 200);
            return computerAnswer = '🖐️';
            answerEl.style.backgroundColor = '#2196f3';
            break;
        case 3:
            answerEl.textContent = '';
            setTimeout(() => {
                answerEl.textContent = '✌️';
            }, 200);
            return computerAnswer = '✌️';
            answerEl.style.backgroundColor = '#4caf50';
            break;
        default:
            break;
    }
}

const buttonsClickHandler = event => {
    const clickedEl = event.target
    if (clickedEl.className == 'rock') {
        switch (randomComputerAnswer()) {
            case '👊':
                resultEl.textContent = "It's a tie";
                break;
            case '🖐️':
                resultEl.textContent = "You lose! paper beats rock";
                computerScoreEl.textContent = Number(computerScoreEl.textContent) + 1;
                break;
            case '✌️':
                resultEl.textContent = "You win! rock beats scissors";
                yourScoreEl.textContent = Number(yourScoreEl.textContent) + 1;
                break;
            default:
                break;
        }
    }
    if (clickedEl.className == 'paper') {
        switch (randomComputerAnswer()) {
            case '👊':
                resultEl.textContent = "You win! paper beats rock";
                yourScoreEl.textContent = Number(yourScoreEl.textContent) + 1;
                break;
            case '🖐️':
                resultEl.textContent = "It's a tie";
                break;
            case '✌️':
                resultEl.textContent = "You lose! scissors beats paper";
                computerScoreEl.textContent = Number(computerScoreEl.textContent) + 1;
                break;
            default:
                break;
        }
    }
    if (clickedEl.className == 'scissor') {
        switch (randomComputerAnswer()) {
            case '👊':
                resultEl.textContent = "You lose! rock beats scissors";
                computerScoreEl.textContent = Number(computerScoreEl.textContent) + 1;
                break;
            case '🖐️':
                resultEl.textContent = "You win! scissors beats paper";
                yourScoreEl.textContent = Number(yourScoreEl.textContent) + 1;
                break;
            case '✌️':
                resultEl.textContent = "It's a tie";
                break;
            default:
                break;
        }
    }
}

buttons.addEventListener("click", buttonsClickHandler);