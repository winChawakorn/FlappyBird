var Bird = {
  x : 0,
  y : 45,
  width : 100,
  height : 100,

  move : function(dx,dy) {
    this.x += dx
    this.y += dy
  }
}

export default Bird
