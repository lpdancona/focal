function diceRoll(times) {
  function rollDice() {
    return Math.floor(Math.random() * 6);
  }
  for (let i = 0; i < times; i++) {
    console.log(rollDice());
  }
}
console.log(diceRoll(7));
