const diceS = document.querySelectorAll('.dices');
const rollBtn = document.querySelector('#roll-button');
const turnTxt = document.querySelector('.turnText');
const p1Txt = document.querySelector('#player1');
const p2Txt = document.querySelector('#player2');
const winTxt = document.querySelector('#winTxt');
var p1 = 0
var p2 = 0
var turn = false;
rollBtn.onclick = () => {
    console.log(p1, p2);
    if(p1 < 30 && p2 < 30) {
        diceS.forEach(element => {
            element.style.display = 'none';
        });

        var randomNumber = Math.floor(Math.random()*6)+1;
        diceS[randomNumber-1].style.display = 'block';
        if(turn){
            turnTxt.innerHTML = "Player one's turn";
            turn = false;
            p2+=randomNumber;
            p2Txt.innerHTML = p2;
        }else{
            turnTxt.innerHTML = "Player two's turn";
            turn = true;
            p1+=randomNumber;
            p1Txt.innerHTML = p1;
        }
    }

    if(p1 >= 30){
        winTxt.style.visibility = 'visible';
        winTxt.innerHTML = "Player one wins"
        
    }else if(p2 > 30){
        winTxt.style.visibility = 'visible';
        winTxt.innerHTML = "Player two wins"
    }
}