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

Dancer.prototype.interact = function() {
  var y = this.$node.css('top');
  var x = this.$node.css('left');
  var closest;
  for (var i = 0; i < window.dancers.length; i++){
    var dancer = window.dancers[i];
    var dancerX = dancer.$node.css('left');
    if (dancer !== this && !(dancer instanceof BlinkyDancer) ){
      var distance = Math.sqrt(y - dancer.)
    }
  }
}
