let gamesToPlay = 10000;
let gamesArray = [];
let randomNumber;

function selectDoor() {
  return randomNumber = Math.floor(Math.random() * 3);
}

function generateGames() {
  for (let i=0; i < gamesToPlay; i++) {
    gamesArray.push(selectDoor());
  }
  return gamesArray;
}


function play(switchDoor) {
  let count = 0;
  for (let i = 0; i < gamesToPlay; i++) {
    if(randomNumber === gamesArray[i] && !switchDoor) {
      count++;
    } else if (randomNumber !== gamesArray[i] && switchDoor) {
      count++;
    }
  }
return count;
}

function chancesToWin(switchDoor){
  return play(switchDoor) / gamesToPlay * 100
}

function print(){
 console.log(`If you play ${gamesToPlay} games and SWITCH doors you have ${chancesToWin(true)}% chances to win `)
 console.log(`If you play ${gamesToPlay} games and DON'T SWITCH doors you have ${chancesToWin(false)}% chances to win `)
}

generateGames();
print();
