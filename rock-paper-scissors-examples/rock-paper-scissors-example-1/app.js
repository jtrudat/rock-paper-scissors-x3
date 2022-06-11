let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')
let timesPlayedDisplay = document.getElementById('rounds')
let percentWonDisplay = document.getElementById('percentStat')
let userChoice
let computerChoice
let result
let percentWon
let timesPlayed = 0
let timesWon = 0

//let selections = document.querySelectorAll('buuton')
//selections.forEach((theOne)=>theOne.addEventListener('click', (e) =>{
//  theOneChoice = e.taget.id
//})

//this forEach statement simply puts a listener on each of the buttons simultaneously, then once clicked the function performs calls and sets the userchoice to the target button clicked
possibleChoices.forEach((userPick) => userPick.addEventListener('click', (e) => {
  userChoice = e.target.id
  console.log(userChoice)
  userChoiceDisplay.innerHTML = `Your Choice: ${userChoice}`
  userPickIcon()
  generateComputerChoice()
  getResult()
  displayPrize()
}))
  function userPickIcon(){
    if (userChoice === 'paper'){
    let paperImg = document.getElementById('userImg')
    paperImg.src = "./assets/paper.png"
  }
    else if ( userChoice === 'scissors'){
    let scissorImg = document.getElementById('userImg')
    scissorImg.src = "./assets/scissors.png"
    }
    else if ( userChoice === 'rock'){
    let rockImg = document.getElementById('userImg')
    rockImg.src = "./assets/rock.png"
    }
  }
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
    let rockImg = document.getElementById('compImg')
    rockImg.src = "./assets/rock.png"
  }
  else if (randomNumber === 2) {
    computerChoice = 'scissors'
    let scissorsImg = document.getElementById('compImg')
    scissorsImg.src = "./assets/scissors.png"
  }
  else if (randomNumber === 3) {
    computerChoice = 'paper'
    let paperImg = document.getElementById('compImg')
    paperImg.src = "./assets/paper.png"
  }
  computerChoiceDisplay.innerHTML = `Computer Choice: ${computerChoice}`
}


function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
    //everytime there is a win, add that to the overall total of wins
    timesWon += 1
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lose!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
    //everytime there is a win, add that to the overall total of wins
    timesWon += 1
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
    //everytime there is a win, add that to the overall total of wins
    timesWon += 1
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  //changing the result text line on the html. You must also add the text, or it will only present the answer 
  resultDisplay.innerHTML = `Result: ${result}`
  //after a round has been played, +=1 adds to the total number of rounds
  timesPlayed += 1
  //changing the number of plays text line on the html. You must also add the text , or it will only present the answer
  timesPlayedDisplay.innerHTML = `Total number of times played: ${timesPlayed}`
  percentWon = (timesWon/timesPlayed)
  console.log(percentWon)
  //changing the percent won text line on the html. You must also add the text , or it will only present the answer
  percentWonDisplay.innerHTML = `Luckiness: ${percentWon}`
}

function displayPrize(){
  if(result === 'you win!'){
    console.log(result)
    let prize = document.querySelector('#winner')
    prize.src = "./assets/crownWinner.png"
   }
   else if(result === 'you lose!'){
     console.log('loser')
     let prize = document.getElementById('winner')
     prize.src = "./assets/donald-trump.png"
   }
   else{
     let prize = document.getElementById('winner')
     //because its a draw, to remove the picture simply set it as blank
     prize.src = ""
   }
}

// function displayPrize(){
//   if(result === 'you win!'){
//     console.log(result)
//     let prize = document.createElement('img')
//     prize.src = "./assets/red-pin.png"
//     document.getElementById('winner').appendChild(prize)
//   }
let info = document.querySelector('script')
console.log(info)