//code here

function add(inputValue){
  if(inputValue === ""){
    return 0;
  }
  if(inputValue.length === 1){
    return parseInt(inputValue);
  }
  if(/[^\s]/.test(str)){
      return 0;
  }
  return;
}

module.exports = { add };
