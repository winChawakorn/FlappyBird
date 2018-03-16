import setting from '../Map/Setting'
function Obstacle() {
    console.log("Created");
    this.width = setting.obstract_width
    this.height = Math.floor((Math.random() * 400) + 10)
    this.between = setting.obstract_between
    this.x = setting.width + this.width

    this.move = function() {
      this.x -= 1
    }

    this.printSomeThing = function() {
      console.log("printing");
    }
}

export default Obstacle;
