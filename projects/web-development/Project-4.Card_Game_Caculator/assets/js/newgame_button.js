document.addEventListener('DOMContentLoaded', function() {
    var newGameButton = document.getElementById('new-game-button');

    newGameButton.addEventListener('click', function() {
        // Show a confirmation dialog
        var confirmReset = confirm("Are you sure you want to start a new game? This will reset everything.");

        if (confirmReset) {
            // User confirmed, reset the game
            var scoreTable = document.getElementById('score-record-table');
            var playerListContainer = document.getElementById('player-list-container');
            var numberOfPlayersInput = document.getElementById('number-of-players');

            // Clear the score table and player list
            if (scoreTable) {
                scoreTable.innerHTML = '';
            }
            if (playerListContainer) {
                playerListContainer.innerHTML = '';
            }

            // Reset the number of players input
            if (numberOfPlayersInput) {
                numberOfPlayersInput.value = '';
            }
        }
    });
});
