const sorting = function(object) {
  let key = Object.keys(object);
  console.log("Key:", key);
  for (key of object) {
    console.log("Key:", key);
  }
  console.log("Sort:", object.sort());
}

//sort by name ascending, then age descending
const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

sorting(students);