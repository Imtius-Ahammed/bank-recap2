document.getElementById('btn-withdraw').addEventListener('click',function(){
  const newWithdrawValue = getInputFieldById('withdraw-field');
  if(isNaN(newWithdrawValue)){
    alert('please enter a valid number');
    return;
  }
  const previousWithdrawValue = getInnerFieldById('withdraw-total');


 


  const newBalance = getInnerFieldById('balance-total');

   
  if(newWithdrawValue > newBalance){
    alert('Tomar account a taka nai');
    return;
  }
  const totalWithdraw = previousWithdrawValue+newWithdrawValue;

  setInnerValueById('withdraw-total', totalWithdraw);
 
  const totalbalance = newBalance- newWithdrawValue;
  setInnerValueById('balance-total', totalbalance); 
})