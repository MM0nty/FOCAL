const raisinAlarm = function (cookie) {
  // Put your solution here
  for (let key of cookie) {
    console.log(key);
    if (key === "🍇") {
      console.log("Raisin alert!");
    } else {
      console.log("All good!");
    }
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log("---");
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log("---");
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));