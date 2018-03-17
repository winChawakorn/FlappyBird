import setting from '../Map/Setting'
function Obstacle() {
    this.width = setting.obstract_width
    // this.height = Math.floor((Math.random() * 400) + 10)
    this.height = Math.floor((Math.random() * (setting.height - setting.obstract_between - 30)))
    this.between = setting.obstract_between
    this.x = setting.width + this.width

    this.score = setting.obstract_score
    this.move = function() {
      this.x -= 1
    }
}

export default Obstacle;
