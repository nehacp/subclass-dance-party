window.SimpsonDancer = class SimpsonDancer extends Dancer{
  constructor(top, left, timeBetweenSteps, id) {
    //Dancer.call(this, top, left, timeBetweenSteps, id);
    super(...arguments);
    this.$img = $('<img src="lisa.gif">');
    this.$node.append(this.$img);
    this.$node.addClass('simpsonDancer');
    this.goLeft = true;
    this.step();

  }
  //oldStep()step;
    oldStep(){
      return this.step;
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
      this.oldStep();
      this.move();
    };



}

//SimpsonDancer.prototype = Object.create(Dancer.prototype);
SimpsonDancer.prototype.constructor = SimpsonDancer;
//SimpsonDancer.prototype.oldStep = SimpsonDancer.prototype.step;
// SimpsonDancer.prototype.step = function() {
//   this.oldStep();
//   this.move();
//
// };

// SimpsonDancer.prototype.move = function() {
//   if (this.left < 0) {
//     this.goLeft = false;
//   } else if (this.left > $('body').width()) {
//     this.goLeft = true;
//   }
//   if (this.goLeft) {
//     this.left -= 10;
//   } else if (!this.goLeft) {
//     this.left += 10;
//   }
//   var style = {
//     left: this.left
//   };
//   this.$node.css(style);
// };

// SimpsonDancer.stop = function() {
//   //lisa should stop moving
// }
