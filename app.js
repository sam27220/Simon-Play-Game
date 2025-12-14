let gameSeq = [];
let userSeq = [];

let btn = ["red", "yellow", "purple" , "green"];

let started = false;
let  level = 0;
let highScore = 0;

let head = document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started == false){
        started = true;
        levelUp();
    }
})
function btnflash(btn){
    btn.classList.add('flash');

    setTimeout(function(){
        btn.classList.remove('flash')
    },250);

}
function levelUp(){
    userSeq = [];
    level++;
    if(level > highScore){
        highScore++;
    }
    head.innerText = ` Level ${level}`;

    let raniIdx = Math.floor(Math.random()*4);
    let ranColor = btn[raniIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    btnflash(ranbtn);
}
function checkseq(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        if(level >= highScore){
            head.innerHTML =`Game over! <b>  Higest score ${highScore}</b> <br> Press any key to start the game.`
        }else{
            head.innerHTML =`Game over! <b> Your score is ${level}</b> <br> Press any key to start the game.`
        }
       
        let body = document.querySelector('body');
        body.style.background = "red";
        setTimeout(function(){
             body.style.background = "white";
        },300)
        reset();
    }
}
function btnpress(){
    let btn = this;
    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    btnflash(btn);
    checkseq(userSeq.length-1);
}

let allBtn =  document.querySelectorAll('.box');
for(val of allBtn){
    val.addEventListener('click',btnpress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}