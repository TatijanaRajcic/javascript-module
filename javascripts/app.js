// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y:0,
  travelLog: []
};

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

function moveForward(rover){
  console.log("moveForward was called");
  switch(rover.direction) {
    case "N": 
      rover.y -=1;
      break;
    case "W": 
      rover.x -=1;
      break;
    case "S": 
      rover.y +=1;
      break;
    case "E": 
      rover.x +=1;
      break;
  }
  console.log("The rover's coordinates are (" + rover.x + "," + rover.y +").");
  rover.travelLog.push(rover.x,rover.y);
  return rover.direction;
}

function executeCommands(string,rover) {
  for (let i=0;i<string.length;i+=1) {
    if (string[i]==="f") {
      moveForward(rover);
    } else if (string[i]==="r") {
      turnRight(rover);
    } else if (string[i]==="l") {
      turnLeft(rover);
    } else {
      console.log("Your command number " + i + " with value of " + string[i] + " is not valid.");
    }
  }
  console.log(rover.travelLog);
}

