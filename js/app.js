let rock = document.getElementById("rock");
let sheet = document.getElementById("sheet");
let chisel = document.getElementById("chisel");

//button choice player
let game = document.getElementById("player");
game.addEventListener("click", function () {
    console.log(game);
})

// choice boot
function choiceBoot () {
    rock = 0;
    sheet = 1;
    chisel = 2;
    let boot = Math.trunc(Math.random() * 2);
    if (boot === 0) {
        choiceBoot = rock;
        console.log(rock);
    }

    else if (boot === 1) {
        choiceBoot = sheet;
        console.log(sheet);
    }

    else if (boot === 2) {
        choiceBoot = chisel;
        console.log(chisel);
    }
}
rock.addEventListener("click", choiceBoot);
sheet.addEventListener("click" , choiceBoot);
chisel.addEventListener("click", choiceBoot);

//winner
    function winner () {

    }