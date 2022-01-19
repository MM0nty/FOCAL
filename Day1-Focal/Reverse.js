const words = process.argv.slice(2);

//each word/whole array
for (let i = words.length - 1; i > -1; i--) {
  console.log(toReverse(words[i]));
}

//each letter of word/each word of array
function toReverse(word) {
  let reverse = "";
  for (let i = word.length - 1; i > -1; i--) {
    reverse += word[i];
  }
  return reverse;
};