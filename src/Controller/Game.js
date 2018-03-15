import bird from './Bird/Bird.js'

// use object instead of function because of it's singleton
var Game = {
  isPlayed : false,
  gravity : 10,
  moveBird : function() {
    bird.move(2,0)
  },
  start : function() {
    console.log("Game start");
    this.isPlayed = true
    if(this.isPlayed)
      this.moveBird()
  },
  stop : function() {
    console.log("Game stop");
    this.isPlayed = false
  },
  updateBirdUi : function() {
    var b = document.getElementById('bird');
    b.click();
  }
}

export default Game
