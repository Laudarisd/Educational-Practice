function setupUndoButton() {
    document.getElementById('undo-button').addEventListener('click', function() {
        var records = JSON.parse(localStorage.getItem('gameRecords')) || [];
        if (records.length > 0) {
            // Remove the last record
            records.pop();

            // Update local storage
            localStorage.setItem('gameRecords', JSON.stringify(records));

            var scoreTable = document.getElementById('score-record-table');
            if (scoreTable && scoreTable.rows.length > 3) { // Adjust based on your table structure
                // Remove the last data row
                scoreTable.deleteRow(scoreTable.rows.length - 3);

                // Recalculate and update Total and Earning rows
                recalculateTotalsAndEarnings(scoreTable);
            }
        } else {
            alert('No records to undo.');
        }
    });
}

function recalculateTotalsAndEarnings(table) {
    var numberOfPlayers = table.rows[0].cells.length - 1; // Assuming the first row is headers
    var totalScores = new Array(numberOfPlayers).fill(0);
    var totalEarnings = new Array(numberOfPlayers).fill(0);
    
    // Assuming you have a rate variable for calculating earnings
    var rate = parseFloat(document.getElementById('rate').value);

    // Iterate over each data row (excluding header, total, and earning rows)
    for (var rowIndex = 1; rowIndex < table.rows.length - 2; rowIndex++) {
        var row = table.rows[rowIndex];
        for (var cellIndex = 1; cellIndex < row.cells.length; cellIndex++) {
            var score = parseFloat(row.cells[cellIndex].textContent) || 0;
            totalScores[cellIndex - 1] += score;
            totalEarnings[cellIndex - 1] += score * rate;
        }
    }

    // Update the total and earning rows
    var totalRow = table.rows[table.rows.length - 2];
    var earningRow = table.rows[table.rows.length - 1];
    for (var i = 0; i < numberOfPlayers; i++) {
        totalRow.cells[i + 1].textContent = totalScores[i].toFixed(2);
        earningRow.cells[i + 1].textContent = totalEarnings[i].toFixed(2);
    }
}

// Call setup function
setupUndoButton();
