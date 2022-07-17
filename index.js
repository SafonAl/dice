let btn = document.querySelector("#btnRoll");
btn.addEventListener("click", function(){
    
    let firstPlayer = Math.ceil(Math.random()*6);
    let secondPlayer = Math.ceil(Math.random()*6);

    document.querySelector("#firstDice").src = "images/dice"+firstPlayer+".png";
    document.querySelector("#secondDice").src = "images/dice"+secondPlayer+".png";

    let winner = document.querySelector("#winner");

    if (firstPlayer>secondPlayer) {
        winner.innerHTML="The winner is player ONE!"
    } else if(firstPlayer<secondPlayer) {
        winner.innerHTML="The winner is player TWO!"
    } else {
        winner.innerHTML="IT`s DRAW!!!"
    }
});