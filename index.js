let p1s = 0, p2s = 0;
function getRandomNumber(min, max) {
    const byteArray = new Uint32Array(1);
    window.crypto.getRandomValues(byteArray);
    
    const range = max - min + 1;
    const randomValue = byteArray[0] % range + min;

    return randomValue;
} 
function played() {
    let rand1 = 1 + (getRandomNumber(1, 6) * getRandomNumber(1, 6)) % 6;
    let rand2 = 1 + (getRandomNumber(1, 6) * getRandomNumber(1, 6)) % 6;

    document.querySelector(".player1-card").setAttribute("src", "./assets/" + rand1 + ".png");
    document.querySelector(".player2-card").setAttribute("src", "./assets/" + rand2 + ".png"); 

    if (rand1 > rand2) {
        document.querySelector(".p1_score").innerHTML = ++p1s; 
        document.querySelector(".result").innerHTML = "!! Player 1 won !!"; 
    } else if (rand1 < rand2) {
        document.querySelector(".p2_score").innerHTML = ++p2s; 
        document.querySelector(".result").innerHTML = "!! Player 2 won !!";
    } else {
        document.querySelector(".result").innerHTML = "!! Game Draw !!";
    }
    
    if(p1s > p2s) document.querySelector(".leader").innerHTML = "1";
    else if(p1s < p2s) document.querySelector(".leader").innerHTML = "2";
    else document.querySelector(".leader").innerHTML = "NONE";
    
}
function reset(){
    p1s = 0, p2s = 0;
    document.querySelector(".result").innerHTML = "!! DICE GAME !!";
    document.querySelector(".player1-card").setAttribute("src", "./assets/p1.jpeg");
    document.querySelector(".player2-card").setAttribute("src", "./assets/p2.jpeg");
    document.querySelector(".p1_score").innerHTML = "0";
    document.querySelector(".p2_score").innerHTML = "0";
    document.querySelector(".leader").innerHTML = "NONE";
}
