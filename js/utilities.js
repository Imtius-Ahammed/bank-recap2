function getInputFieldById(inputId){
  const newInputAmount = document.getElementById(inputId);
  const newInputValueString = newInputAmount.value;
  const newInputValue = parseFloat(newInputValueString);
  newInputAmount.value = '';
  return newInputValue;
}

// for innertext
function getInnerFieldById(innerId){
  const previousElement = document.getElementById(innerId);
  const previousValueString = previousElement.innerText;
  const previousValue = parseFloat(previousValueString);
  return previousValue;
  
}

// set the value

function setInnerValueById(inputId,newValue){
  const textElement = document.getElementById(inputId);
  textElement.innerText = newValue;
}