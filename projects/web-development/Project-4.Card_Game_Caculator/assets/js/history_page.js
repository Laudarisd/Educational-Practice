function saveGameRecord() {
    var scoreTable = document.getElementById('score-record-table');
    if (!scoreTable) return; // If no table, do nothing

    var gameRecord = {
        date: new Date().toLocaleString(),
        scores: scoreTable.innerHTML // Store the table's HTML
    };

    var records = JSON.parse(localStorage.getItem('gameRecords')) || [];
    records.push(gameRecord);
    localStorage.setItem('gameRecords', JSON.stringify(records));
}

document.getElementById('historyButton').addEventListener('click', function() {
    window.location.href = 'assets/templates/history_page.html'; // Redirect to the history page
});


// document.addEventListener('DOMContentLoaded', function() {
//     var historyButton = document.getElementById('historyButton');
//     if (historyButton) {
//         historyButton.addEventListener('click', function() {
//             window.location.href = 'assets/templates/history_page.html'; // Ensure this path is correct
//         });
//     } else {
//         console.error("History button not found");
//     }
// });


// function saveGameRecord() {
//     var scoreTable = document.getElementById('score-record-table');
//     if (!scoreTable) return; // If no table, do nothing

//     // Extracting data from the score table
//     var gameRecord = {
//         date: new Date().toLocaleString(),
//         rounds: []
//     };

//     // Assuming the first row is headers and the last two rows are Total and Earning
//     for (var rowIndex = 1; rowIndex < scoreTable.rows.length - 2; rowIndex++) {
//         var row = scoreTable.rows[rowIndex];
//         var roundData = {
//             round: row.cells[0].textContent,
//             players: []
//         };

//         for (var cellIndex = 1; cellIndex < row.cells.length; cellIndex++) {
//             var playerScore = {
//                 name: scoreTable.rows[0].cells[cellIndex].textContent,
//                 score: row.cells[cellIndex].textContent
//             };
//             roundData.players.push(playerScore);
//         }

//         gameRecord.rounds.push(roundData);
//     }

//     var records = JSON.parse(localStorage.getItem('gameRecords')) || [];
//     records.push(gameRecord);
//     localStorage.setItem('gameRecords', JSON.stringify(records));
// }