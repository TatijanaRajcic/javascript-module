// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y:0,
  travelLog: [],
  board: [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]
};

// PLAYING WITH OBSTACLES
// ======================
function setNewBoard(board, numberOfObstacles) {
  var i=0;
  while (i<numberOfObstacles) {
    i+=1;
    board[Math.floor(Math.random() * board.length)][Math.floor(Math.random() * board.length)] = "Danger";
  }
  return board;
}

// TURNING LEFT
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N": 
      rover.direction = "W";
      break;
    case "W": 
      rover.direction = "S";
      break;
    case "S": 
      rover.direction = "E";
      break;
    case "E": 
      rover.direction = "N";
      break;
  }
  console.log("The rover is currently facing " + rover.direction);
  return rover.direction;
}

// TURNING RIGHT
// ======================
function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N": 
      rover.direction = "E";
      break;
    case "W": 
      rover.direction = "N";
      break;
    case "S": 
      rover.direction = "W";
      break;
    case "E": 
      rover.direction = "S";
      break;
  }
  console.log("The rover is currently facing " + rover.direction);
  return rover.direction;
}

// MOVING FORWARD
// ======================
function moveForward(rover){
  console.log("moveForward was called");
  switch(rover.direction) {
    case "N":
      if (rover.y === 0) {
        console.log("Not possible. Out of grid.");
      } else if (rover.board[rover.y-1][rover.x] === "Danger") {
        console.log("Danger ahead.");
      } else {
        rover.y -=1;
      }
      break;
    case "W": 
      if (rover.x === 0) {
        console.log("Not possible. Out of grid.");
      } else if (rover.board[rover.y][rover.x-1] === "Danger") {
        console.log("Danger ahead.");
      } else {
        rover.x -=1;
      }
      break;
    case "S": 
      if (rover.y === 9) {
        console.log("Not possible. Out of grid.");
      } else if (rover.board[rover.y+1][rover.x] === "Danger") {
        console.log("Danger ahead.");
      } else {
        rover.y +=1;
      }
      break;
    case "E": 
      if (rover.x === 9) {
        console.log("Not possible. Out of grid.");
      } else if (rover.board[rover.y][rover.x+1] === "Danger") {
        console.log("Danger ahead.");
      } else {
        rover.x +=1;
      }
      break;
  }
  console.log("The rover's coordinates are (" + rover.x + "," + rover.y +").");
  rover.travelLog.push(rover.x,rover.y);
  return rover.direction;
}

// MOVING BACKWARDS
// ======================
function moveBackwards(rover){
  console.log("moveBackwards was called");
  switch(rover.direction) {
    case "N":
      if (rover.y === 9) {
        console.log("Not possible. Out of grid.");
      } else if (rover.board[rover.y+1][rover.x] === "Danger") {
        console.log("Danger behind.");
      } else {
        rover.y +=1;
      }
      break;
    case "W": 
      if (rover.x ===9) {
        console.log("Not possible. Out of grid.");
      } else if (rover.board[rover.y][rover.x+1] === "Danger") {
        console.log("Danger behind.");
      } else {
        rover.x +=1;
      }
      break;
    case "S": 
      if (rover.y ===0) {
        console.log("Not possible. Out of grid.");
      } else if (rover.board[rover.y-1][rover.x] === "Danger") {
        console.log("Danger behind.");
      } else {
        rover.y -=1;
      }
      break;
    case "E": 
      if (rover.x ===0) {
        console.log("Not possible. Out of grid.");
      } else if (rover.board[rover.y][rover.x-1] === "Danger") {
        console.log("Danger behind.");
      } else {
        rover.x -=1;
      }
      break;
  }
  console.log("The rover's coordinates are (" + rover.x + "," + rover.y +").");
  rover.travelLog.push(rover.x,rover.y);
  return rover.direction;
}

// EXECUTING SEVERAL COMMANDS
// ======================
function executeCommands(string,rover) {
  for (let i=0;i<string.length;i+=1) {
    if (string[i]==="f") {
      moveForward(rover);
    } else if (string[i]==="r") {
      turnRight(rover);
    } else if (string[i]==="l") {
      turnLeft(rover);
    } else if (string[i]==="b") {
      moveBackwards(rover);
    } else {
      console.log("Some of your commands are not valid.");
    }
  }
  console.log(rover.travelLog);
}