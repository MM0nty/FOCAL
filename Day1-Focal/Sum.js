const num1 = process.argv[2];
const num2 = process.argv[3];

const sum = function(num1, num2) {
  return Number(num1) + Number(num2);
};

console.log(sum(num1, num2));