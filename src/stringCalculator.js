//code here
function hasCharacter(str) {
  return /[^\s]/.test(str); // Checks for any non-whitespace character
}

function isLengthOne(str) {
  return str.length === 1;
}

function isEmpty(str) {
  return str === "";
}

function add(inputValue){
  isEmpty(inputValue);
  isLengthOne(inputValue);
  hasCharacter(inputValue);
  return;
}

module.exports = { add };
