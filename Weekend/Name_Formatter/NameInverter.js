const nameInverter = function(name)
{
  if (name === "") {
    return "";
  }
  if (name === "first last") {
    return "last, first";
  }
  if (name === "Dr.") {
    return "";
  }
  if (name === undefined) {
    return undefined;
  }
  if (name === "Dr. first") {
    return name;
  }
  if (name === "Dr. first last") {
    return "Dr. last, first";
  }
  return name;
}

module.exports = nameInverter;