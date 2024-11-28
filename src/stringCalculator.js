//code here

function add(inputValue){
  if(inputValue === ""){
    return 0;
  }
  if(inputValue.length === 1){
    return parseInt(inputValue);
  }
  return;
}

module.exports = { add };
