import bird from './Bird/Bird.js'

// use object instead of function because of it's singleton
var Game = {
  iid : 0,
  gravity : 10,
  moveBird : function() {
    bird.move(3,0)
    console.log(bird);
  },
  start : function() {
    console.log("Game start");
    this.iid = setInterval( () => this.moveBird() , 1000)
  },
  stop : function() {
    console.log("Game stop");
    clearInterval(this.iid);
  },
  updateBirdUi : function() {
    var b = document.getElementById('bird');
    b.click();
  }
}

export default Game
