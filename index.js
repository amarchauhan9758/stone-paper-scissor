let childDiv = document.getElementById("child-div")

let bubbuWins = 0;
let dudduWins = 0;

const isBubbuWin = () =>{

    let  imageElement = document.createElement("img");
    imageElement.setAttribute('src' ,"https://media.tenor.com/SoDgrmtvVqwAAAAM/couple-unhappy.gif ")
    imageElement.setAttribute('alt' ,"bubu")
    imageElement.setAttribute('title' ,"bubu win")

    return  console.log( "bubbu win" , imageElement )
}

function playerChoice(bubbuChoice) {
    let choices = ["stone", "paper", "scissors"];
    let dudduChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (bubbuChoice === dudduChoice) {
        result = "It's a tie!";
    } else if ((bubbuChoice === "stone" && dudduChoice === "scissors") ||
               (bubbuChoice === "scissors" && dudduChoice === "paper") ||
               (bubbuChoice === "paper" && dudduChoice === "stone")) {
        result = "Bubbu wins!";
        bubbuWins++;
        isBubbuWin()
    } else {
        result = "Duddu wins!";
        dudduWins++;
    }

    document.getElementById("result").innerHTML = `Bubbu chose ${bubbuChoice}, and Duddu chose ${dudduChoice}. ${result}`;
    document.getElementById("score").innerHTML = `Bubbu: ${bubbuWins} - Duddu: ${dudduWins}`;
   childDiv.appendChild(imageElement)
}


