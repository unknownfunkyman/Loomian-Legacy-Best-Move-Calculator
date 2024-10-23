document.getElementById('calculateBtn').addEventListener('click', calculateBestMove);

function calculateBestMove() {
    const yourLoomian = document.getElementById('yourLoomian').value;
    const yourHP = parseInt(document.getElementById('yourHP').value);
    const yourEnergy = parseInt(document.getElementById('yourEnergy').value);
    const yourMoves = document.getElementById('yourMoves').value.split(',').map(move => move.trim());

    const opposingLoomian = document.getElementById('opposingLoomian').value;
    const opposingHP = parseInt(document.getElementById('opposingHP').value);
    const opposingEnergy = parseInt(document.getElementById('opposingEnergy').value);
    const opposingMoves = document.getElementById('opposingMoves').value.split(',').map(move => move.trim());

    const yourTeamLoomians = parseInt(document.getElementById('yourTeamLoomians').value);
    const opposingTeamLoomians = parseInt(document.getElementById('opposingTeamLoomians').value);

    // Placeholder for the move calculation logic
    // For now, just selecting a random move from your moves
    const bestMove = yourMoves[Math.floor(Math.random() * yourMoves.length)];

    document.getElementById('bestMoveOutput').innerText = bestMove ? bestMove : 'No valid moves available';
}
