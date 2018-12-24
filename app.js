/*
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
var scores,roundScores,activePlayer,gamePlaying,lastDice,winningScore
init();
 document.getElementById('dice-1').style.display='block';
 document.getElementById('dice-2').style.display='block';

 
 document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
   var dice1=Math.floor(Math.random()*6)+1;
   var dice2=Math.floor(Math.random()*6)+1;

    var diceDom1=document.getElementById('dice-1');
    var diceDom2=document.getElementById('dice-2');

   // diceDom.style.display='block'
    diceDom1.src='dice-'+dice1+'.png'
    diceDom2.src='dice-'+dice2+'.png'

    //document.getElementById('current-'+activePlayer).textContent=dice;
   // document.getElementById('score-'+activePlayer).textContent=dice;
      if(dice1===6 && lastDice===6){
          scores[activePlayer]=0;
          document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
          nextPlayer();
      }else if(dice1!=1){
        roundScores+=dice1;
        document.getElementById('current-'+activePlayer).textContent=roundScores;

      }else if(dice2!=1){}else{
        
        //document.getElementById('score-'+activePlayer).textContent=roundScores;
      //  var previousPlayer=activePlayer;
     
     nextPlayer();

      }
      }
      lastDice=dice1;
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    scores[activePlayer]+=roundScores;
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    winningScore=document.querySelector('.final-score').value;
    console.log(winningScore);
    if(!winningScore){winningScore=20;}

    if(scores[activePlayer]>=winningScore){
  document.querySelector('#name-'+activePlayer).textContent='Winner';
        document.querySelector('.dice').style.display='none';
        console.log(activePlayer);
       // document.querySelector('.player-1-panel').classList.toggle('winner');

     //   document.getElementsByClassName('player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.replace('active','winner');
        gamePlaying=false;
    }else{
        nextPlayer();

    }
} 

});
function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScores=0;
 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');

    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.diplay='none';
    
}
document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});
function init(){
    scores=[0,0];
    roundScores=0;
    activePlayer=0;
    lastDice=0;
    gamePlaying=true;
     //document.querySelector('#current-'+activePlayer).textContent=dice;
     //document.qierySelector(#id).textcontent---used to store data/retrieve data
      document.getElementById('score-0').textContent='0';
      document.getElementById('score-1').textContent='0';
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';
      document.querySelector('.player-0-panel').classList.replace('winner','active');
      document.querySelector('.player-1-panel').classList.replace('winner','active');
      document.querySelector('.player-0-panel').classList.add('active');
      document.querySelector('.player-1-panel').classList.add('active');

    
}
