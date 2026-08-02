document.getElementById('generate-players').addEventListener('click', function() {
    var numberOfPlayers = document.getElementById('number-of-players').value;
    var playerListContainer = document.getElementById('player-list-container');

    if (numberOfPlayers < 2 || numberOfPlayers > 10) {
        alert('Please enter a number between 2 and 10.');
        return;
    }

    // Clear any existing player list
    playerListContainer.innerHTML = '';

    // Generate new player name inputs
    for (var i = 1; i <= numberOfPlayers; i++) {
        var inputGroup = document.createElement('div');
        inputGroup.classList.add('form-group');

        var label = document.createElement('label');
        label.textContent = 'Player ' + i + ' Name:';
        label.setAttribute('for', 'player-name-' + i);

        var input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.id = 'player-name-' + i;
        input.name = 'player_name_' + i;

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);
        playerListContainer.appendChild(inputGroup);
    }

    // Create Next button if it doesn't already exist
    if (!document.getElementById('next-button')) {
        var nextButton = document.createElement('button');
        nextButton.type = 'button';
        nextButton.id = 'next-button';
        nextButton.textContent = 'Next';
        // To change the color of the Next button, replace 'btn-primary' with another class
        nextButton.classList.add('btn', 'btn-primary'); 
        playerListContainer.appendChild(nextButton);

        // Event listener for Next button to generate the score table
        nextButton.addEventListener('click', function() {
            playerListContainer.style.display = 'none'; // Hide the player name section

            var tableContainer = document.createElement('div');
            tableContainer.id = 'score-input-container';

            var table = document.createElement('table');
            table.classList.add('table', 'table-borderless'); // Bootstrap classes, borderless table

            // Generate the table headers
            var header = table.createTHead();
            var headerRow = header.insertRow();
            var headers = ['Player Name', 'Winner', 'Points', 'Seen Mall', 'Playing Dubli'];
            headers.forEach(function(headerText) {
                var headerCell = document.createElement('th');
                headerCell.textContent = headerText;
                headerRow.appendChild(headerCell);
            });

            //Logic to ensure only winner checkbox can be checked
            var winnerCheckboxes = []; // Array to store winner checkboxes

            // Generate the table rows for each player
            for (var i = 1; i <= numberOfPlayers; i++) {
                var playerName = document.getElementById('player-name-' + i).value;
                var row = table.insertRow();
                
                var cellName = row.insertCell();
                cellName.textContent = playerName;

                // Logic for the winner checkbox
                var cellWinner = row.insertCell();
                var winnerCheckbox = document.createElement('input');
                winnerCheckbox.type = 'checkbox';
                winnerCheckbox.classList.add('winner-checkbox');
                winnerCheckbox.name = 'winner_' + i;
                cellWinner.appendChild(winnerCheckbox);
                winnerCheckboxes.push(winnerCheckbox); // Push the checkbox into the array

                // Add input for Points
                var cellPoints = row.insertCell();
                var pointsInput = document.createElement('input');
                pointsInput.type = 'number';
                pointsInput.classList.add('form-control');
                pointsInput.name = 'points_' + i;
                cellPoints.appendChild(pointsInput);

                // Add checkbox for Seen Mall
                var cellSeenMall = row.insertCell();
                var seenMallCheckbox = document.createElement('input');
                seenMallCheckbox.type = 'checkbox';
                seenMallCheckbox.name = 'seen_mall_' + i;
                cellSeenMall.appendChild(seenMallCheckbox);

                // Add checkbox for Playing Dubli
                var cellPlayingDubli = row.insertCell();
                var playingDubliCheckbox = document.createElement('input');
                playingDubliCheckbox.type = 'checkbox';
                playingDubliCheckbox.name = 'playing_dubli_' + i;
                cellPlayingDubli.appendChild(playingDubliCheckbox);
            }

            // Attach event listeners to each winner checkbox after they are created
            winnerCheckboxes.forEach(function(checkbox) {
                checkbox.addEventListener('change', function() {
                    // When a winner checkbox is changed, uncheck all others
                    if (this.checked) {
                        winnerCheckboxes.forEach(function(box) {
                            if (box !== this) {
                                box.checked = false;
                            }
                        }.bind(this)); // The bind method is necessary to use 'this' inside forEach
                    }
                });
            });

            tableContainer.appendChild(table);
            document.getElementById('player-number-form').appendChild(tableContainer);

            // Create Submit button
            var submitButton = document.createElement('button');
            submitButton.type = 'button';
            submitButton.textContent = 'Submit';
            submitButton.classList.add('btn', 'btn-success'); // To change the color, replace 'btn-success' with another class
            tableContainer.appendChild(submitButton);

            // Initialize the round number outside of your event listener
            var currentRoundNumber = 1;

            // Event listener for Submit button to update the record table
            submitButton.addEventListener('click', function() {
                //Alert user to tick winner checkbox
                var isWinnerChecked = false;
                for (var i = 1; i <= numberOfPlayers; i++) {
                    var winnerCheckbox = document.querySelector('input[name="winner_' + (i) + '"]');
                    if (winnerCheckbox.checked) {
                        isWinnerChecked = true;
                        break
                    }
                }
                if (!isWinnerChecked) {
                    alert('Please tick the winner checkbox');
                    return;
                }

                var rate = parseFloat(document.getElementById('rate').value);
                var scoreTable = document.getElementById('score-record-table');
                var winnerExtraPoints = 3;
                var winnerIndex = -1;
                var totalPoints = 0;
                var adjustedScores = new Array(numberOfPlayers).fill(0);

                if (!scoreTable) {
                // Create the table if it doesn't exist yet
                scoreTable = document.createElement('table');
                scoreTable.id = 'score-record-table';
                scoreTable.classList.add('table');
                document.getElementById('record-table').appendChild(scoreTable);

                // Create the thead element
                var thead = document.createElement('thead');
                scoreTable.appendChild(thead);

                // Create the header row
                var headerRow = thead.insertRow();
                var nameHeaderCell = document.createElement('th');
                nameHeaderCell.textContent = 'Name';
                headerRow.appendChild(nameHeaderCell);
                for (var i = 1; i <= numberOfPlayers; i++) {
                    var headerCell = document.createElement('th');
                    headerCell.textContent = document.getElementById('player-name-' + i).value;
                    headerRow.appendChild(headerCell);
                }

                // Set the background color of the header row with !important
                headerRow.style.setProperty('background-color', 'lightgray', 'important');
                }


                // Calculate total points and identify the winner
                for (var i = 0; i < numberOfPlayers; i++) {
                    var winnerCheckbox = document.querySelector('input[name="winner_' + (i + 1) + '"]');
                    var seenMallCheckbox = document.querySelector('input[name="seen_mall_' + (i + 1) + '"]');
                    var playingDubliCheckbox = document.querySelector('input[name="playing_dubli_' + (i + 1) + '"]');
                    var scoreInput = document.querySelector('input[name="points_' + (i + 1) + '"]');
                    var score = parseFloat(scoreInput.value) || 0;

                    if (winnerCheckbox && winnerCheckbox.checked) {
                        winnerIndex = i;
                        seenMallCheckbox.checked = true; // Ensure Seen Mall is checked for the winner
                        winnerExtraPoints = playingDubliCheckbox.checked ? 6 : 3; // Increase extra points if Playing Dubli is checked
                        score += winnerExtraPoints;
                        
                    }

                    if (seenMallCheckbox.checked || i === winnerIndex) {
                        totalPoints += score;
                    }
                }
            
                // Calculate adjusted scores
                for (var i = 0; i < numberOfPlayers; i++) {
                    if (i === winnerIndex) continue;

                    var seenMallCheckbox = document.querySelector('input[name="seen_mall_' + (i + 1) + '"]');
                    var individualScore = parseFloat(document.querySelector('input[name="points_' + (i + 1) + '"]').value) || 0;

                    if (seenMallCheckbox.checked) {
                        adjustedScores[i] = (individualScore * numberOfPlayers) - totalPoints;
                    } else {
                        adjustedScores[i] = winnerExtraPoints - 10 - totalPoints;
                    }
                }

                //     adjustedScores[winnerIndex] -= adjustedScores[i];
                // }
                // Accumulate the winner's score
                adjustedScores[winnerIndex] = adjustedScores.reduce((acc, score, index) => {
                    return index !== winnerIndex ? acc - score : acc;
                }, 0);

                // Initialize or update the Total and Earning rows
                var totalRow = document.getElementById('total-row');
                var earningRow = document.getElementById('earning-row');
                // Determine the index for inserting the new round row
                var insertIndex = totalRow ? totalRow.rowIndex : -1; // Insert before the total row if it exists


               // Create a new row for the current round's scores
                var roundRow = scoreTable.insertRow(insertIndex);
                roundRow.insertCell().textContent = 'Round ' + currentRoundNumber;

                // Initialize or update the Total and Earning rows
                var totalRow = document.getElementById('total-row');
                var earningRow = document.getElementById('earning-row');
                if (!totalRow) {
                    totalRow = scoreTable.insertRow();
                    totalRow.id = 'total-row';
                    totalRow.insertCell().textContent = 'Total';
                    for (var i = 0; i < numberOfPlayers; i++) {
                        totalRow.insertCell().textContent = '0.00';
                    }
                }
                if (!earningRow) {
                    earningRow = scoreTable.insertRow();
                    earningRow.id = 'earning-row';
                    earningRow.insertCell().textContent = 'Earning';
                    for (var i = 0; i < numberOfPlayers; i++) {
                        earningRow.insertCell().textContent = '0.00';
                    }
                }

                // Update the table with adjusted scores and total, earning rows
                for (var i = 0; i < numberOfPlayers; i++) {
                    var scoreCell = roundRow.insertCell();
                    scoreCell.textContent = adjustedScores[i].toFixed(2);
                    scoreCell.style.color = adjustedScores[i] < 0 ? 'red' : 'black';

                    if (i === winnerIndex) {
                        scoreCell.style.color = 'green';
                    }

                    // Update the total row with adjusted scores
                    var totalCell = totalRow.cells[i + 1];
                    var currentTotal = parseFloat(totalCell.textContent);
                    totalCell.textContent = (currentTotal + adjustedScores[i]).toFixed(2);
                    totalCell.style.color = 'blue'; // Blue for total scores

                    // Update the earning row (example calculation, modify as needed)
                    var earningCell = earningRow.cells[i + 1];
                    var currentEarning = parseFloat(earningCell.textContent);
                    var newEarning = currentEarning + (adjustedScores[i] * rate); // Example calculation
                    earningCell.textContent = newEarning.toFixed(2);
                    earningCell.style.color = 'black';
                }

                // Increment the round number for the next submit action
                currentRoundNumber++;
            });

            // Remove the Next button after creating the table
            nextButton.remove();
        });
    }
});



