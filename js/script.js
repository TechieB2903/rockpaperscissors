


$(".play").click(function(){
  let userChoice = $("input").val();
  $(".userChoice").text(`${userChoice}`);
  let randomNumberZeroToThree =  Math.ceil( Math.random() * 3);
  
  let computerChoice;
  if (randomNumberZeroToThree === 1){
    computerChoice = "Rock"
  } else if (randomNumberZeroToThree === 2) {
    computerChoice = "Paper"
  } else {
    computerChoice = "Scissors"
  }
    $(".computerChoice").text(computerChoice);
  let result;
  if (userChoice === computerChoice){
    result = "Tie!";
  } else if (userChoice === "Rock" && computerChoice === "Scissors"){
    result = "You won! :D";
  } else if (userChoice === "Rock" && computerChoice === "Paper"){
    result = "You lost :(";
  } else if (userChoice === "Scissors" && computerChoice === "Paper"){
    result = "You won! :D";
  } else if (userChoice === "Scissors" && computerChoice === "Rock"){
    result = "You lost :(";
  } else if (userChoice === "Paper" && computerChoice === "Scissors"){
    result = "You lost :(";
  } else if (userChoice === "Paper" && computerChoice === "Rock"){
    result = "You lost :(";
  } else {
    result = "Uhhh it has to either be Rock, Paper, Scissors :/"
  }
  $(".result").text(result);
});
