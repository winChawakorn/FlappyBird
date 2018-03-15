import setting from '../Map/Setting'

var Bird = {
  x : setting.width / 2,
  y : setting.height / 2,
  width : setting.bird_width,
  height : setting.bird_height,

  move : function(dx,dy) {
    this.x += dx
    this.y += dy
  }
}

export default Bird
