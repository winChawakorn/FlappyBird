import bird from './Bird/Bird.js'
import Obstract from './Obstacle/Obstacle'
import setting from './Map/Setting'
import birdUtil from './Bird/Utils'

var obstactCreateTime = setting.obstract_width * 1;

// use object instead of function because of it's singleton
var Game = {
  iid: [],
  jid: 0,
  accurate: 1,
  obstracts: [],
  score: 0,
  isDead: false,
  moveBird: function () {
    bird.move(1 + this.accurate)
    this.refreshBird()
  },
  Jump: function () {
    clearInterval(this.jid)
    var final = bird.y - 110
    this.jid = setInterval(() => {
      bird.move(-20)
      this.refreshBird()
      if (bird.y <= final)
        clearInterval(this.jid)
    }, 20)
    this.accurate = 0
  },
  startBird: function () {
    var id = setInterval(() => {
      this.moveBird()
      this.accurate += 0.8
      if (birdUtil.checkHit(bird, this.obstracts) || birdUtil.checkFall(bird)) {
        // GAME OVER
        this.isDead = true
        this.stop()
      }
    }, 43)
    this.iid.push(id)
  },
  start: function () {
    console.log("Game start");
    this.startBird();
    var id2 = setInterval(() => {
      this.obstracts.forEach((item) => {
        item.move()
        if(item.score !== 0 && (item.x + item.width < bird.x)) {
          this.score += item.score
          console.log(this.score)
          item.score = 0;
          this.updateScore()
        }
      })
      if (birdUtil.checkHit(bird, this.obstracts)) {
        // GAME OVER
        this.isDead = true
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
      this.refreshObstracts()
    }, 2)
    this.iid.push(id2)
  },
  stop: function () {
    console.log("Game stop");
    this.iid.forEach((id) => {
      clearInterval(id);
    })
    clearInterval(this.jid);
    this.gameStop()
  },
  reset: function () {
    this.stop()
    this.iid = []
    this.jid = 0
    this.accurate= 1
    this.score = 0
    this.obstracts= []
    this.isDead = false
    obstactCreateTime = setting.obstract_width * 1;
    // bird
    bird.y = setting.height / 2;
    this.refreshBird();
    this.refreshObstracts();
  }
}

export default Game
