var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);

SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

SuperHeroDancer.prototype.punch = function() {
  this.$node.toggle();
};

// SuperHeroDancer.prototype.lineUp = function() {
//   Dancer.prototype.setPosition();
// };