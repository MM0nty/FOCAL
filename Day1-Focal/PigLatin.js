const words = process.argv.slice(2);
const pigLatin = [];

const toPigLatin = function(word) {
	console.log("Word: ", word);
  return word.slice(1, word.length) + word[0] + "ay";
};

for (let i = 0; i < words.length; i++) {
  pigLatin.push(toPigLatin(words[i]));
}

console.log(pigLatin.join(' '));
