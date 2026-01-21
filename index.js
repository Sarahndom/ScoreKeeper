
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('.p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('.p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto')
let winningScore = 5;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});
p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;

    }

    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}











// const p1Display = document.querySelector('.p1Display');
// const p2Display = document.querySelector('.p2Display');
// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto')

// // Stores Player 1's current score
// let p1Score = 0;
// // Stores Player 2's current score
// let p2Score = 0;
// // Defines the score needed to win the game
// let winningScore = 5;
// // Tracks whether the game has ended
// let isGameOver = false;



// // Adds a click listener to Player 1's button
// p1Button.addEventListener('click', function () {
//     // Only allow scoring if the game is not over
//     if (!isGameOver) {
//         // Increase Player 1's score by 1
//         p1Score += 1;

//         // Check if Player 1 has reached the winning score
//         if (p1Score === winningScore) {
//             isGameOver = true;

//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }

//         // Update Player 1's score display
//         p1Display.textContent = p1Score;
//     }
// });

// // Adds a click listener to Player 2's button
// p2Button.addEventListener('click', function () {
//     // Only allow scoring if the game is not over
//     if (!isGameOver) {
//         // Increase Player 2's score by 1
//         p2Score += 1;

//         // Check if Player 2 has reached the winning score
//         if (p2Score === winningScore) {
//             isGameOver = true;

//             // Adds the "has-text-success" class to Player 2's score display
//             p2Display.classList.add('has-text-success');

//             // Adds the "loser" class to Player 1's score display
//             p1Display.classList.add('has-text-danger');
//             p2Button.disabled = true;
//             p1Button.disabled = true;
//         }

//         // Update Player 2's score display
//         p2Display.textContent = p2Score;
//     }
// });



// // Listens for changes to the winning score dropdown/select
// winningScoreSelect.addEventListener('change', function () {
//     // Updates the winning score based on the selected value
//     winningScore = parseInt(this.value);

//     // Resets the game when the winning score changes
//     reset();
// });

// // Adds a click listener to the reset button
// resetButton.addEventListener('click', reset);

// // Resets the game back to its initial state
// function reset() {
//     // Allows the game to be played again
//     isGameOver = false;

//     // Resets both players' scores
//     p1Score = 0;
//     p2Score = 0;

//     // Updates the score displays back to 0
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;

//     // Removes has-text-success/loser styling from both players
//     p1Display.classList.remove('has-text-success', 'has-text-danger');
//     p2Display.classList.remove('has-text-success', 'has-text-danger');

//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }
