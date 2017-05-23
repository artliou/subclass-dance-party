var PolyDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
};

PolyDancer.prototype = Object.create(Dancer.prototype);

PolyDancer.prototype.constructor = PolyDancer;

PolyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

PolyDancer.prototype.spin = function() {
  this.$node.slideToggle();
};

// PolyDancer.prototype.lineUp = function() {
//   Dancer.prototype.setPosition();
// };