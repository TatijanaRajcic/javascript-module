// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
};

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}

// TURNING THE ROVER
// ======================
function nextMove(move,rover) {
  switch(move) {
    case "left":
      if (rover.direction === "N") {
        rover.direction = "W";
      } else if (rover.direction === "W") {
        rover.direction = "S";
      } else if (rover.direction === "S") {
        rover.direction = "E";
      } else {
        rover.direction = "N";
      };
      turnLeft();
      break;
    case "right":
      if (rover.direction === "N") {
        rover.direction = "E";
      } else if (rover.direction === "W") {
        rover.direction = "N";
      } else if (rover.direction === "S") {
        rover.direction = "W";
      } else {
        rover.direction = "S";
      }; 
      turnRight();
      break;
  }
}

