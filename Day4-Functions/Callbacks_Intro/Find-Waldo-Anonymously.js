// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {console.log(`Waldo is located at index ${index}!`)});