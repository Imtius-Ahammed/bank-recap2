document.getElementById('btn-deposit').addEventListener('click', function(){
   const newDepositValue = getInputFieldById('deposit-field');
   if(isNaN(newDepositValue)){
      alert('please enter a valid number');
      return;
    }
  

   const previousElement = getInnerFieldById('deposit-total');
   
   const newDepositTotal = previousElement+newDepositValue;

   setInnerValueById('deposit-total',newDepositTotal);


  
   const previousBalance = getInnerFieldById('balance-total');
   const newBalanceTotal =  previousBalance + newDepositValue;

   setInnerValueById('balance-total', newBalanceTotal);

   

})