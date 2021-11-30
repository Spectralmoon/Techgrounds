let someKittens =
  "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";

console.log(someKittens.indexOf("!"));

const sentence = someKittens.split("! ");
console.log(sentence);

sentenceOne = sentence[0] + "!";
console.log(sentenceOne);

sentenceTwo = sentence[1];
console.log(sentenceTwo);

//  B

let upperCase = someKittens.toUpperCase();
console.log(upperCase);

//    C

console.log(someKittens.length);

console.log(someKittens.indexOf(""));
console.log(someKittens.lastIndexOf(""));

// D

console.log(someKittens.charAt(0));
// answer D

console.log(someKittens.charAt(81));
// answer  "empty string"
