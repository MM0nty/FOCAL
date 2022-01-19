const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const map = lighthouses.map(lighthouse => lighthouse.length);
//function(lighthouse) { return lighthouse.length }
console.log(map);
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]