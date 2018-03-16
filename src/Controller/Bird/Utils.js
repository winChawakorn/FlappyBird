import setting from '../Map/Setting'

var Utils = {
  checkHit : function(bird,obstracts) {
    for(var i = 0 ; i < obstracts.length ; i++) {
      if(bird.x + bird.width >= obstracts[i].x && bird.x <= obstracts[i].x + obstracts[i].width && bird.y <= obstracts[i].height) { return true }
      if(bird.x + bird.width >= obstracts[i].x && bird.x <= obstracts[i].x + obstracts[i].width && bird.y + bird.height >= obstracts[i].height + obstracts[i].between) { return true }
    }
    return false
  },
  checkFall : function(bird) {
    if(bird.height + bird.y >= setting.height) {
      return true
    }
    return false
  },
}

export default Utils
