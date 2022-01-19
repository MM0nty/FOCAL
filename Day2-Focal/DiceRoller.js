const dice = process.argv[2];
let roll = [];

function randomInt(max)
{
  return Math.ceil(Math.random() * max);
};

const dieRoll = function(dice)
{
  for (i = 0; i < dice; i++)
  {
    roll[i] = randomInt(6);
  }
  return console.log(roll);
};

dieRoll(dice);
console.log(`Rolled ${dice} dice: ${roll.join(", ")}`);