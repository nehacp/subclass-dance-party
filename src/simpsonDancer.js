 var SimpsonDancer = class SimpsonDancer extends Dancer{
  constructor(top, left, timeBetweenSteps, id) {
    super(...arguments);
    this.$img = $('<img src="lisa.gif">');
    this.$node.append(this.$img);
    this.$node.addClass('simpsonDancer');
    this.goLeft = true;

  }

  move() {
      if (this.left < 0) {
        this.goLeft = false;
      } else if (this.left > $('body').width()) {
        this.goLeft = true;
      }
      if (this.goLeft) {
        this.left -= 10;
      } else if (!this.goLeft) {
        this.left += 10;
      }
      var style = {
        left: this.left
      };
      this.$node.css(style);
    };

    step() {
      this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
      this.move();
    };
}
