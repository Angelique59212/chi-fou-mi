//appel image
let containerSecond = document.getElementById("container-second").getElementsByTagName("img");
//appel conteneur choix
let play = document.getElementById("play");
let boot = document.getElementById("boot");
//appel affichage score
let scorePlayer = document.getElementById("score-player");
let scoreBoot = document.getElementById("score-boot");
//appel qui gagne
let whoWin = document.getElementById("winner");
//create element p
let score = document.createElement("p");

// create random
function choiceBoot () {
    return  Math.trunc(Math.random() * 3);
}

for (let i = 0; i < containerSecond.length ; i++) {
    containerSecond[i].addEventListener("click", function () {
        console.log(i)
        let boot = choiceBoot();
        if (i === boot) {
            whoWin.innerHTML = "Egalité !";
        }
        else {
            winner(i, boot);
        }
    })
}

//winner
function winner (player, boot) {
    switch (player) {
        case 0 :
            if (boot === 1) {
                whoWin.innerHTML = "L'ordinateur remporte!";
            }
            else  {
                whoWin.innerHTML = "Tu as gagné!";
            }
            break;
        case 1 :
            if (boot === 0) {
                whoWin.innerHTML = "Tu as gagné!";
            }
            else {
                whoWin.innerHTML = "L'ordinateur remporte!";
            }
            break;
        case 2 :
            if (boot === 0) {
                whoWin.innerHTML = "L'ordinateur remporte!";
            }
            else {
                whoWin.innerHTML = "Tu as gagné!";
            }
            break;
    }
}
