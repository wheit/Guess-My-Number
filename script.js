'use strict';

let btn =document.querySelector('.check');
let num=document.querySelector('.number');
let number=Math.floor(Math.random()*20)+1;
let message = document.querySelector('.message');
let reset=document.querySelector('.again');
let color=document.querySelector('body')

let scoreboard=document.querySelector('.score');
let score=20;
let highscore=0;

btn.addEventListener('click',function(){
    let guess =Number(document.querySelector('.guess').value);
    if(!guess){
        message.innerHTML="No number!";        
        }else if(guess <= 0||guess>20){
        message.innerHTML="Pick a number between 1 and 20";
        }else if (score>1){

        if(guess===number){
            message.innerHTML="Correct Number"
            document.querySelector('.number').innerHTML=number;
            color.style.backgroundColor='#60b347'
            document.querySelector('.number').style.width="30rem"            
            scoreboard.innerHTML=score;
            if(score>highscore){
                highscore=score
                document.querySelector('.highscore').innerHTML=highscore
                
            }

        }else if(guess!==number&& guess>number){
            message.innerHTML="Too high";
            // document.querySelector('.number').innerHTML=number;
            score--;
            scoreboard.innerHTML=score;
        }else if(guess!==number&& guess<number){
            message.innerHTML="Too low";
            // document.querySelector('.number').innerHTML=number;
        score--;
        scoreboard.innerHTML=score;
        }
        }else{
            message.innerHTML="You lost the game";
            scoreboard.innerHTML=0;
        } 
     
        
    });
    reset.addEventListener('click',function(){
        score=20;
        scoreboard.innerHTML=score;
        message.innerHTML="Start guessing...";
        color.style.backgroundColor='#222';
        number=Math.floor(Math.random()*20)+1;
        document.querySelector('.number').style.width="15rem";
        document.querySelector('.guess').value=""; 
        document.querySelector('.number').innerHTML='?';
    })



    
    
