import bird from './Bird/Bird.js'
import Obstract from './Obstacle/Obstacle'
import setting from './Map/Setting'
import birdUtil from './Bird/Utils'

var obstactCreateTime = setting.obstract_width * 1;

// use object instead of function because of it's singleton
var Game = {
  iid: [],
  accurate: 1,
  obstracts: [],
  moveBird: function () {
    bird.move(1 + this.accurate)
    // console.log(bird);
  },
  Jump: function () {
    clearInterval(jump)
    var final = bird.y - 140
    var jump = setInterval(() => {
      bird.move(-20)
      if (bird.y <= final)
        clearInterval(jump)
    }, 20)
    this.accurate = 0
  },
  start: function () {
    console.log("Game start");

    var id = setInterval(() => {
      this.moveBird()
      this.accurate += 0.8
      if (birdUtil.checkHit(bird, this.obstracts) || birdUtil.checkFall(bird)) {
        // GAME OVER
        this.stop()
      }
      if (this.refresh() != null) {
        this.refresh()
      }
    }, 43)
    this.iid.push(id)
    var id2 = setInterval(() => {
      this.obstracts.forEach((item) => {
        item.move()
      })
      if (birdUtil.checkHit(bird, this.obstracts)) {
        // GAME OVER
        this.stop()
      }
      obstactCreateTime -= 1;
      if (obstactCreateTime <= 0) {
        this.obstracts.push(new Obstract())
        obstactCreateTime = setting.obstract_width * 3;
      }
      if (this.obstracts.length > 0) {
        if (this.obstracts[0].x + this.obstracts[0].width < 0)
          this.obstracts = this.obstracts.slice(1)
      }
      if (this.refresh() != null) {
        this.refresh()
      }
    }, 2)
    this.iid.push(id2)
  },
  stop: function () {
    console.log("Game stop");
    this.iid.forEach((id) => {
      clearInterval(id);
    })
  }
}

export default Game
