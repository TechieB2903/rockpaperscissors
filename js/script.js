function getRandomComputerChoice() {
  let randomNumberZeroToThree =  Math.ceil( Math.random() * 3);
  let computerChoice;
  if (randomNumberZeroToThree === 1){
    computerChoice = "Rock";
  } else if (randomNumberZeroToThree === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function chooseWinner(userChoice, botChoice) {
  let result;
  if (userChoice === botChoice){
    result = "Tie!";
  } else if (userChoice === "Rock" && botChoice === "Scissors"){
    result = "You won! :D";
  } else if (userChoice === "Rock" && botChoice === "Paper"){
    result = "You lost :(";
  } else if (userChoice === "Scissors" && botChoice === "Paper"){
    result = "You won! :D";
  } else if (userChoice === "Scissors" && botChoice === "Rock"){
    result = "You lost :(";
  } else if (userChoice === "Paper" && botChoice === "Scissors"){
    result = "You lost :(";
  } else if (userChoice === "Paper" && botChoice === "Rock"){
    result = "You won! :D";
  } else {
    result = "Uhhh it has to either be Rock, Paper, Scissors :/";
  }
  return result;
}


$(".play").click(function(){
  
  let userChoice = $("input").val();
  $(".userChoice").text(`${userChoice}`);

  let botChoice = getRandomComputerChoice();

    $(".computerChoice").text(botChoice);
  let result = chooseWinner(userChoice, botChoice)
  
  $(".result").text(result);
  $("input").val("");
});
