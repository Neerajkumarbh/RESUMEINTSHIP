



let images = ["1DICE.png",
"2 DICE.png",
"3DICE.png",
"4DICE.png",
"5 DICE.png",
"6DICE.png"];
let dice = document.querySelectorAll("img");
  
function roll(){
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });

        let dieoneValue = Math.floor(Math.random()*6);

        let dieTwoValue = Math.floor(Math.random()*6);

        console.log(dieoneValue, dieTwoValue);

        document.querySelector("#die-1" ).setAttribute("src",images[dieoneValue] );
        document.querySelector("#die-2").setAttribute("src",images[dieTwoValue] );
        document.querySelector("#total").innerHTML="YOUR SCORE IS "+((dieoneValue + 1)+(dieTwoValue + 1));

    
    },
    1000
    );

    const diceSound = document.getElementById('diceSound');
    diceSound.play();
  }


roll();


