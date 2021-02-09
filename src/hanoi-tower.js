module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let resultTurns = Math.pow(2, disksNumber) - 1;
    let resultSeconds = Math.floor(resultTurns/(turnsSpeed/3600));
    return {turns: resultTurns, seconds: resultSeconds}
}
