import setting from '../Map/Setting'

var Bird = {
  x : setting.width / 5,
  y : setting.height / 2,
  width : setting.bird_width,
  height : setting.bird_height,

  move : function(dy) {
    this.y += dy
  }
}

export default Bird
