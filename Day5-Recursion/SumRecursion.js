function sums(n) {
  if (n === 1) {
    return 1;
  }
  return n + sums(n - 1);
}

console.log(sums(4));