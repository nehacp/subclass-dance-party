var DrakeDancer = function(top, left, timeBetweenSteps, id) {

  Dancer.call(this, top, left, timeBetweenSteps, id);
  this.$img = $('<img src="drake.png">');
  this.$node.append(this.$img);
  this.$node.addClass('drakeDancer');
  this.angle = 20;
};

DrakeDancer.prototype = Object.create(Dancer.prototype);
DrakeDancer.prototype.constructor = DrakeDancer;

DrakeDancer.prototype.oldStep = DrakeDancer.prototype.step;
DrakeDancer.prototype.step = function() {
  this.oldStep();
  this.angle *= -1;
  this.rotate(this.angle);

};

DrakeDancer.prototype.rotate = function(ang) {
  var angle = ang;
  var style = {
    transform: 'rotate(' + angle + 'deg)'
  };
  this.$node.css(style);
};

DrakeDancer.prototype.jump = function(){
  //drake should jump
  this.$node.animate({})
}
