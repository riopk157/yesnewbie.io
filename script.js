const beachDoorPath = "https://res.cloudinary.com/dmijhozct/image/upload/v1670358822/beachDoor_bbrdsa.svg";

const botDoorPath = "https://res.cloudinary.com/dmijhozct/image/upload/v1670358822/bot_kfbiaq.svg";

const spaceDoorPath = "https://res.cloudinary.com/dmijhozct/image/upload/v1670358822/doorStar_yielkb.svg";

const closedDoorPath = "https://res.cloudinary.com/dmijhozct/image/upload/v1670358822/closed_door_m0qbmb.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

let startButton = document.getElementById("start");

let doorImage1 = document.getElementById("door1");
doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
  door1.src = openDoor1;
  playDoor(doorImage1);
  }
};

let doorImage2 = document.getElementById("door2");
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
  door2.src = openDoor2;
  playDoor(doorImage2);
  }
};

let doorImage3 = document.getElementById("door3");
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
  door3.src = openDoor3;
  playDoor(doorImage3);
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Click a door to begin. Good luck!';
  randomChoreDoorGenerator();
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
};


const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = "Game Over! Play again?"
    score = 0;
    currentStreak.innerHTML = score;
  } 
  currentlyPlaying = false;
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
    getScore();
  } else if (isBot(door) === true) {
    gameOver();
  }
};

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true
  } else {
    return false
  }
};

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

const getScore = () => {
  score++;
    currentStreak.innerHTML = score;
    if (score > highScore) {
      highScore = score;
      bestStreak.innerHTML = highScore;
    }
};


class Background {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }
  description(){ 
     return "You choose a "+this.size+" "+ this.color+" background";
  }
}


startRound();