var SimpsonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img src="lisa.gif">');
  this.$node.append(this.$img);
  this.$node.addClass('simpsonDancer');
  this.goLeft = true;
}

SimpsonDancer.prototype = Object.create(Dancer.prototype);
SimpsonDancer.prototype.constructor = SimpsonDancer;
SimpsonDancer.prototype.oldStep = SimpsonDancer.prototype.step;
SimpsonDancer.prototype.step = function() {
  this.oldStep();
  this.move();

}

SimpsonDancer.prototype.move = function() {
  if (this.left < 0){
    this.goLeft = false;
  } else if (this.left > $('body').width()){
    this.goLeft = true;
  }
  if (this.goLeft){
    this.left -= 10;
  } else if (!this.goLeft) {
    this.left += 10;
  }
  var style = {
    left: this.left
  }
  this.$node.css(style);
}
