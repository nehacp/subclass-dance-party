var SimpsonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img src="lisa.gif">');
  this.$node.append(this.$img);
  this.$node.removeClass('dancer');
  this.$node.addClass('simpsonDancer');
}

SimpsonDancer.prototype = Object.create(Dancer.prototype);
SimpsonDancer.prototype.constructor = SimpsonDancer;
SimpsonDancer.prototype.oldStep = SimpsonDancer.prototype.step;
SimpsonDancer.prototype.step = function() {
  this.oldStep();
}
