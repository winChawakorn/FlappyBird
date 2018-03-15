import bird from './Bird/Bird.js'
import Obstract from './Map/Obstract'

var obstactCreateTime = 50;

// use object instead of function because of it's singleton
var Game = {
  iid : 0,
  accurate : 1,
  obstracts : [],
  moveBird : function() {
    bird.move(1 + accurate , 0)
    console.log(bird);
  },
  Jump : function() {
    bird.move(-15 , 0)
    this.accurate = 0
  }
  start : function() {
    console.log("Game start");
    // one timing
    this.iid = setInterval( () => {
      this.moveBird()
      this.obstracts.forEach((item) => {
        item.move()
      })
      this.accurate += 1
      obstactCreateTime--;
      if(obstactCreateTime <= 0) {
        this.obstracts.push(new Obstract())
        obstactCreateTime = 50;
      }
      if(obstracts[0].x + obstracts[0].width < 0)
        obstracts = obstracts.slice(1)
    } , 1000)
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
