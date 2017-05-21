'use strict';
var directions = [ 'north', 'east', 'south', 'west' ]

function Robot() {
  // implement your solution here!
  this.bearing
  this.x
  this.y // arbitrary defaults not necessary ^_^
  this.coordinates = [this.x,this.y]
}

Robot.prototype.evaluate = function (instructions) {
  let arr = instructions.split("")
  for (let i = 0; i < arr.length ; i++){
    if (arr[i] === 'A'){
      this.advance()
    } else if (arr[i] === 'L'){
      this.turnLeft()
    } else if (arr[i] === 'R'){
      this.turnRight()
    }
  }
}

Robot.prototype.instructions = function(instr){
  let arr = instr.split("")
  let ret_arr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'A'){
      ret_arr.push("advance")
    } else if (arr[i] === 'L'){
      ret_arr.push("turnLeft")
    } else if (arr[i] === 'R'){
      ret_arr.push("turnRight")
    }
  }
  return ret_arr
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
  this.coordinates = [this.x,this.y]
}

Robot.prototype.advance = function(){
  if (this.bearing === 'north'){
    this.y++
  } else if (this.bearing ==='east'){
    this.x++
  } else if (this.bearing === 'south'){
    this.y--
  } else if (this.bearing === 'west'){
    this.x--
  }
  this.coordinates = [this.x, this.y]
}
