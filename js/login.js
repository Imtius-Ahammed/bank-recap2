document.getElementById('btn-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  
  
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;


  if(email === 'sontan@baap.com' && password === 'secret' ){
    window.location.href = 'index.html';
  }
  else{
    alert('Tui password vuila gesos!! Toke ami teijjo sontan gosona korlam.')
  }
  
})