    let humanScore = 0;
    let computerScore = 0;

    playGame();

    function playGame() {
        for(let i=0; i<5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
        
        if (humanScore == computerScore) {
            console.log("It's a tie! You both scored " + humanScore + " point(s)!");
        } else if (humanScore > computerScore) {
            console.log("You beat the computer " + humanScore + " to " + computerScore + "!");
        } else {
            console.log("Computer wins " + computerScore + " to " + humanScore + "! Better luck next time.")
        }
    }

    function playRound(humanChoice, computerChoice) {
        // Gameplay outcomes
        // --------------------------------------
        // 0-0 rock - rock                  tie
        // 0-1 rock - paper             lose
        // 0-2 rock - scissiors     win
        // 1-0 paper - rock         win
        // 1-1 paper - paper                tie
        // 1-2 paper - scissors         lose
        // 2-0 scissors - rock          lose
        // 2-1 scissors - paper     win
        // 2-2 scissors - scissors          tie

        // array to hold text values for updating the user
        const rps = ["rock", "paper", "scissors"];

        if (humanChoice == computerChoice) {
            console.log("Tie! No points awarded this round.")
        } else if ((humanChoice == 0 && computerChoice == 2) ||
                    (humanChoice == 1 && computerChoice == 0) ||
                    (humanChoice == 2 && computerChoice == 1)) {
            console.log("Human wins this round! " + rps[humanChoice].charAt(0).toUpperCase() + rps[humanChoice].slice(1) + " beats " + rps[computerChoice] + "!");
            humanScore++;
        } else {
            console.log("Computer wins this round! " + rps[computerChoice].charAt(0).toUpperCase() + rps[computerChoice].slice(1) + " beats " + rps[humanChoice] + "!");
            computerScore++;
        }
    }

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 10) % 3;
        return computerChoice;
    }

    function getHumanChoice () {
        let humanChoice = window.prompt("What will you play: Rock, Paper, or Scissors?");
        // assumes user input is the correct spelling, but allows for any use of capitalization
        humanChoice = humanChoice.toLowerCase();

        // convert use choice to numberic value
        switch(humanChoice) {
            case "rock":
                humanChoice = 0;
                break;
            case "paper":
                humanChoice = 1;
                break;
            case "scissors":
                humanChoice = 2;
                break;
            default:
                console.log("Unknown value humanChoice.")
        }
        return humanChoice;
    }