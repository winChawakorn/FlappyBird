import bird from './Bird/Bird.js'
import Obstract from './Obstacle/Obstacle'
import setting from './Map/Setting'

var obstactCreateTime = setting.obstract_width * 1;

// use object instead of function because of it's singleton
var Game = {
  iid : [],
  accurate : 1,
  obstracts : [],
  moveBird : function() {
    bird.move(1 + this.accurate , 0)
    // console.log(bird);
  },
  Jump : function() {
    bird.move(-15 , 0)
    this.accurate = 0
  },
  start : function() {
    console.log("Game start");

    var id = setInterval( ()=> {
      this.moveBird()
      this.accurate += 1
      if(this.refresh() != null) {
        this.refresh()
      }
    } , 43)
    this.iid.push(id)
    var id2 = setInterval( () => {
      this.obstracts.forEach((item) => {
        item.move()
      })
      obstactCreateTime-=1;
      if(obstactCreateTime <= 0) {
        this.obstracts.push(new Obstract())
        obstactCreateTime = setting.obstract_width * 3;
      }
      if(this.obstracts.length>0) {
        if(this.obstracts[0].x + this.obstracts[0].width < 0)
          this.obstracts = this.obstracts.slice(1)
      }
      if(this.refresh() != null) {
        this.refresh()
      }
    } , 10)
    this.iid.push(id2)
  },
  stop : function() {
    console.log("Game stop");
    this.iid.forEach((id) => {
      clearInterval(id);
    })
  }
}

export default Game
