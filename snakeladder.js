let player1Position = 0;
let player2Position = 0;

const DICE_START_RANGE = 1;
const DICE_END_RANGE = 6 - DICE_START_RANGE;
const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;

let rollDieCount = 0;

let currentPlayer = "P1";

while (player1Position != 100 && player2Position != 100) {
    rollDieCount++;

    console.log("Player 1 Position: " + player1Position +
        "\tPlayer 2 Position: " + player2Position);

    let diceNumber = (Math.floor(Math.random() * DICE_END_RANGE) + DICE_START_RANGE);

    let option = (Math.floor(Math.random() * 3));

    let playerPosition;

    if (currentPlayer == ("P1")) {
        playerPosition = player1Position;
    } else {
        playerPosition = player2Position;
    }

    console.log("------------" + currentPlayer + " turn---------");
    console.log("Die Number: " + diceNumber);

    switch (option) {
        case NO_PLAY:
            console.log("No Play Option => " + currentPlayer + "Position: " + playerPosition);
            break;

        case LADDER:
            playerPosition = playerPosition + diceNumber;
            if (playerPosition > 100) {
                playerPosition = playerPosition - diceNumber;
            }
            console.log("Ladder Option => " + currentPlayer + "Position: " + playerPosition);
            break;

        case SNAKE:
            playerPosition = playerPosition - diceNumber;
            if (playerPosition > 0) {
                playerPosition = 0;
            }
            console.log("Snake Option => " + currentPlayer + "Position: " + playerPosition);
            break;
    }

    if (currentPlayer == ("P2")) {
        player1Position = playerPosition;
    } else {
        player2Position = playerPosition;
    }
    currentPlayer = option == LADDER ? currentPlayer : currentPlayer == ("P1") ? "P2" : "P1";
    break;
}
 
console.log("Number of Rolling: " + rollDieCount);

if (player1Position == 100) {
    console.log("Player 1 Won");
} else {
    console.log("Player 2 Won");
}

console.log("Player 1 Position: " + player1Position
    + "\tPlayer 2 Position: " + player2Position);

console.log("Game Over");

