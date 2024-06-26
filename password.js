const generator = require("generate-password");
let password = generator.generate({
  length: 12,
  numbers: true,
  symbols: true,
  lowercase: true,
  uppercase: true,
});
console.log(password);
