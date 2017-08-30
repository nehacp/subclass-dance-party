var BlinkyDancer = class BlinkyDancer extends Dancer{
  constructor(top, left, timeBetweenSteps, id) {
    super(...arguments);
    this.$node.addClass('dancer blinkyDancer');
  }

  step() {
    this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
    var colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    var borderColor = {
      'border-color': color
    };
    this.$node.css(borderColor);
  }
  expand() {
    //dot should expand
    this.$node.css({'border': '30px solid', 'border-radius': '30px'});
  }

  reduce() {
    //dot should expand
    this.$node.css({'border': '10px solid', 'border-radius': '10px'});
  }
};
