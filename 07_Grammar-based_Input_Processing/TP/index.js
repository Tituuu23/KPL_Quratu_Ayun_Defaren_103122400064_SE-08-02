function toNumberArray(input) {
  const arr = typeof input === "string" ? input.split(",") : input;

  return arr
    .map(x => parseFloat(x))
    .filter(x => !isNaN(x));
}

// testing
console.log(toNumberArray("1, 2"))           // [1, 2]
console.log(toNumberArray(["1", "2"]))       // [1, 2]
console.log(toNumberArray(" 11,55,33   "))   // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]