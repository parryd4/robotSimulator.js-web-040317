'use strict';
var directions = [ 'north', 'east', 'south', 'west' ]

function Robot() {
  // implement your solution here!
  this.bearing
  this.x
  this.y // arbitrary defaults not necessary ^_^
}

Robot.prototype.place = function (obj) {
  this.bearing = obj.direction
  this.x = obj.x
  this.y = obj.y
};

Robot.prototype.orient = function (direction){

  if (!directions.includes(direction)){
    throw new Error("Invalid Robot Bearing")
  } else {
    this.bearing = direction
  }

}

Robot.prototype.turnRight = function (){
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] === this.bearing){
      this.bearing = directions[ (i+1) % 4 ]
      break
    }
  }
}

Robot.prototype.turnLeft = function (){
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] === this.bearing){
      this.bearing = directions[ (i + directions.length - 1 ) % 4 ]
      break
    }
  }
}

Robot.prototype.at = function (x,y) {
  this.x = x
  this.y = y  
}

ClassName.prototype.methodName = function () {

}
