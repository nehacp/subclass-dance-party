// Creates and returns a new dancer object that can step
var Dancer = class Dancer {
  constructor(top, left, timeBetweenSteps, id) {
    this.$node = $('<span class="dancer"></span>');
    this.$node.data('index', id);
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

  stop() {
    clearTimeout(this.timer);
  }

  jump(){
    this.$node.animate({'top': this.top - 80 + 'px'}, 'fast');
    this.$node.animate({'top': this.top + 80 + 'px'}, 'fast');
  }

  findClosest() {
    var thisY = this.top;
    var thisX = this.left;
    var closest = {};
    closest.distance = Infinity;
    closest.dancer;
    for (var i = 0; i < window.dancers.length; i++){
      var dancer = window.dancers[i];
      var dancerX = dancer.left;
      var dancerY = dancer.top

      if (dancer !== this && !(dancer instanceof BlinkyDancer) ){
        var distance = Math.sqrt(Math.pow(thisY - dancerY, 2) + Math.pow(thisX - dancerX, 2));
        if (distance < closest.distance){
          closest.distance = distance;
          closest.dancer = dancer;
        }
      }
    }
    return closest.dancer;
  }
};
