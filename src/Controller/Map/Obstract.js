import setting from './setting'
// can call new Obstract()
function Obstract() {
  console.log("creating Obstract");
  var width = setting.obstract_width
  var height = setting.bird_width * 2
  var x = setting.width + width
  var y = this.randomY()

  // ความสูงจากล่างสูงของแมพ จนถึงปล่อง
  function randomY() {
    return Math.floor(Math.random() * (setting.height - setting.height/4)) + setting.height/5
  }

  function move() {
    this.x -= 1
  }
}
