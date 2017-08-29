class BlinkyDancer extends Dancer{
  constructor(top, left, timeBetweenSteps, id) {
    super();
//    Dancer.call(this, top, left, timeBetweenSteps, id);
    this.$node.addClass('dancer blinkyDancer');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = Dancer.prototype.step;
  }
//return blinkyDancer;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep = BlinkyDancer.prototype.step;
BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  var colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];
  var color = colors[Math.floor(Math.random() * colors.length)];
  var borderColor = {
    'border-color': color
  };
  this.$node.css(borderColor);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

BlinkyDancer.prototype.expand = function() {
  //dot should expand
  this.$node.css({'border': '30px solid', 'border-radius': '30px'});
}

BlinkyDancer.prototype.reduce = function() {
  //dot should expand
  this.$node.css({'border': '10px solid', 'border-radius': '10px'});
}
