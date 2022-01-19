const password = process.argv[2];

console.log(obfuscate(password));

function obfuscate(password) {
  const p4ssw0rd = [];
  for (let i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      p4ssw0rd.push("4");
    } else if (password[i] === "e") {
      p4ssw0rd.push("3");
    } else if (password[i] === "o") {
      p4ssw0rd.push("0");
    } else if (password[i] === "l") {
      p4ssw0rd.push("1");
    } else {
      p4ssw0rd.push(password[i]);
    }
  }
  return p4ssw0rd.join('');
};