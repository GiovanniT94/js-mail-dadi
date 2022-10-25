/* **Mail**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


**Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.  */

//------ Mail --------------

const mailAccettate=['MarioRossi@gmail.com', 'Mario.Rossi@gmail.com', 'mariorossi@gmail.com', 'Mariorossi@gmail.com', 'marioRossi@gmail.com'];
const userMail= document.querySelector('#user-mail');
const riscontro = document.getElementById('riscontro-mail');
const loginBtn=document.getElementById('login-button');
let isMailInList=false;

loginBtn.addEventListener('click', function(){
  let mailInserita = userMail.value;
  
    for( let i=0; i<mailAccettate.length; i++){
      
      if(mailInserita===mailAccettate[i]){
        isMailInList=true;
      }else{ }
    }
    console.log(mailAccettate);
    console.log(isMailInList);
    console.log(mailInserita);


      if(isMailInList===true){
        document.getElementById('riscontro-mail').innerHTML='Bentornato';
        }else if(isMailInList===false){
        document.getElementById('riscontro-mail').innerHTML='Questa email non è presente nei nostri database';
        }
   mailInserita = '';
});
riscontro.innerHTML='';



// -------------- dadi -------------------

const lancioDadi=document.getElementById('dadi');

lancioDadi.addEventListener('click', function(){
  const tiroComputer = Math.ceil(Math.random()*(6-1)+1);
  const tiroUser = Math.ceil(Math.random()*(6-1)+1);
  document.getElementById('punteggio-pc').innerHTML = `Il punteggio del computer è <strong>${tiroComputer}</strong>`;
  document.getElementById('punteggio-user').innerHTML= `Il punteggio dello user è <strong>${tiroUser}</strong>`

  if(tiroComputer>tiroUser){
    document.getElementById('vincitore').innerHTML= `Vince: <strong>computer</strong>`;
  }else if(tiroComputer<tiroUser){
    document.getElementById('vincitore').innerHTML= `Vince: <strong>user</strong>`;
  }else{
    document.getElementById('vincitore').innerHTML= `Parità!<br> Tira di nuovo i dadi`;
  }

  console.log('Il punteggio del computer è',tiroComputer , 'Il punteggio dello user è',tiroUser);

})



