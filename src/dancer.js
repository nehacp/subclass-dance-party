// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, id) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.$node.data('index', id);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.stop = function() {
  clearTimeout(this.timer);
}

Dancer.prototype.jump = function(){
  console.log('drake jumps');
  this.$node.animate({'top': this.top - 80 + 'px'}, 'fast');
  this.$node.animate({'top': this.top + 80 + 'px'}, 'fast');
}

Dancer.prototype.findClosest = function() {
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
