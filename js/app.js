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

//create enfant img
let image = document.createElement("img");
let image2 = document.createElement("img");

//create element p
let score = document.createElement("p");//player
let score2 = document.createElement("p");//boot

//create score total
let result = 0;//player
let result1 = 0;//boot

// create random
function choiceBoot () {
    return  Math.trunc(Math.random() * 3);
}

for (let i = 0; i < containerSecond.length ; i++) {
    containerSecond[i].addEventListener("click", function () {
        let computer = choiceBoot();
        if (i === computer) {
            whoWin.innerHTML = "Egalité !";
        }
        else {
            winner(i, computer);
        }

        image.src = containerSecond[i].src; //prendre l'image et sa source quand on clique
        play.appendChild(image);
        image2.src = containerSecond[computer].src;
        boot.appendChild(image2);
    })
}

//winner
function winner (player, boot) {
        switch (player) {
            case 0 :
                if (boot === 1) {
                    whoWin.innerHTML = "L'ordinateur remporte!";
                    result1++;
                    score2.innerHTML = "Son score est de" + result1 ;
                    scoreBoot.appendChild(score2);
                }
                else  {
                    whoWin.innerHTML = "Tu as gagné!";
                    result++;
                    score.innerHTML = "Ton score est de" + result;
                    scorePlayer.appendChild(score);
                }
                break;
            case 1 :
                if (boot === 0) {
                    whoWin.innerHTML = "Tu as gagné!";
                    result++;
                    score.innerHTML = "Ton score est de" + result;
                    scorePlayer.appendChild(score);
                }
                else {
                    whoWin.innerHTML = "L'ordinateur remporte!";
                    result1++;
                    score2.innerHTML = "Son score est de" + result1;
                    scoreBoot.appendChild(score2);
                }
                break;
            case 2 :
                if (boot === 0) {
                    whoWin.innerHTML = "L'ordinateur remporte!";
                    result1++;
                    score2.innerHTML = "Son score est de" + result1;
                    scoreBoot.appendChild(score2);
                }
                else {
                    whoWin.innerHTML = "Tu as gagné!";
                    result++;
                    score.innerHTML = "Ton score est de" + result;
                    scorePlayer.appendChild(score);
                }
                break;
        }
}
