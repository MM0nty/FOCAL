const swapper = function (key1, object1, key2, object2) {
  console.log('Swap!');
  let keysObj1 = Object.keys(object1); //1, 2, 3
  let keysObj2 = Object.keys(object2); //4, 3, 5
  for (keys1 of keysObj1) {
    if (keys1 === key1) {
      for (keys2 of keysObj2) {
        if (keys2 === key2) {
          let tempKey1 = object1[key1];
          let tempKey2 = object2[key2];
          object2[keys2] = tempKey1;
          // console.log("object2[keys2]:", object2[keys2]);
          object1[keys1] = tempKey2;
          // console.log("object1[keys1]:", object1[keys1]);
        }
      }
    }
  }
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1, b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 }); //a to c; c to a
console.log("\n");
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12}); //b to d (7 to 12)
console.log("\n");
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 }); //3 to 5

/* Output
Swap!
object1: { a: 5 , b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8 , b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7}
Swap!
object1: { a: 1 , b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 }
*/