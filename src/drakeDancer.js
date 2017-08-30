var DrakeDancer = class DrakeDancer extends Dancer {
  constructor(top, left, timeBetweenSteps, id) {
    super(...arguments);
    this.$img = $('<img src="drake.png">');
    this.$node.append(this.$img);
    this.$node.addClass('drakeDancer');
    this.angle = 20;
  }

  step() {
    this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
    this.angle *= -1;
    this.rotate(this.angle);

  }

  rotate(ang) {
    var angle = ang;
    var style = {
      transform: 'rotate(' + angle + 'deg)'
    };
    this.$node.css(style);
  }

}
