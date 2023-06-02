'use strict'
//! All Default Values 

// Default Value For Score Number 
let score = 20;
// To Generate Random Secret Number 
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
// High score 
let highScore = 0;

//! Function To Display Different Text Content Message
// For .sub-heading 
const displaySubHeading = function (message) {
    document.querySelector('.sub-heading').textContent = message;
};
// For .score-number
const displayScoreNumber = function (message) {
    document.querySelector('.score-number').textContent = message;
};
// For .btn-start
const displayBtnStart = function (message) {
    document.querySelector('.btn-start').textContent = message;
};
// For .secret-number
const displaySecretNumber = function (message) {
    document.querySelector('.secret-number').textContent = message;
};


// On Click for Start, Restart & Reset Button button 
document.querySelector('.btn-start').addEventListener('click', function () {
    // On Click Start
    //--- Resetting Score to default 20
    score = 20;
    displayScoreNumber(score);

    //--- Resting the secret random no.
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
    displaySecretNumber("?");

    //---Change Start Button Text to "Reset!"
    displayBtnStart("Reset! 🔁");

    //--- Change sub heading from "Click on Start! to Play 🔼" to "Start Guessing"
    displaySubHeading("Start Guessing ... 🧐");

    //--- Resetting Input Box
    document.querySelector('.input-box').value = '';

    //--- Resetting to Default Background Color
    document.querySelector('body').style.backgroundColor = "#222";
    //--- Resetting to Default Width Color
    document.querySelector('.secret-number').style.width = "";
})

// On Click "Check Button"
document.querySelector('.btn-check').addEventListener
    ('click', function () {
        // Getting Value from Input Box and converting to Number
        const guess = Number(document.querySelector(".input-box").value);

        // When there is no input
        if (!guess) {
            displaySubHeading("⛔ Not a Number, Guess Again!");
        }

        // When Player Wins
        else if (guess === secretNumber) {
            displaySubHeading("🎊Correct Guess🎉");
            displaySecretNumber(secretNumber);
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.secret-number').style.width = '30rem';
            // High Score 
            if (score > highScore) {
                // Setting High Score from current score
                highScore = score;
                // Displaying Updated  High Score in DOM
                document.querySelector('.high-score-number').textContent = highScore
            }
        }
        // When Player Loses
        else if (guess !== secretNumber) {
            if (score > 1) {
                // Changing the state of Sub Heading
                displaySubHeading(guess < secretNumber ? "📉 Low Guess,Guess Again!" : "📈 High Guess,Guess Again! ");
                score--;
                displayScoreNumber(score);
            } else {
                displaySubHeading("☠ You Lose,Start Again!");
                displayScoreNumber(0);
                displayBtnStart("Restart!🔂");
                document.querySelector('body').style.backgroundColor = "#ab3030";
            }
        }
    }
    )







