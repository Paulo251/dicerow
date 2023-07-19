//rodar D4
function d4() {
    var dice = document.getElementById("d4");
    var randomNumber = Math.floor(Math.random() * 4) + 1; 
    dice.innerHTML = randomNumber;
}

//rodar D6
function d6() {
    var dice = document.getElementById("d6");
    var randomNumber = Math.floor(Math.random() * 6) + 1; 
    dice.innerHTML = randomNumber;
}
//rodar D10
function d10() {
    var dice = document.getElementById("d10");
    var randomNumber = Math.floor(Math.random() * 10) + 1; 
    dice.innerHTML = randomNumber;
}
//rodar D12
function d12() {
    var dice = document.getElementById("d12");
    var randomNumber = Math.floor(Math.random() * 12) + 1; 
    dice.innerHTML = randomNumber;
}

