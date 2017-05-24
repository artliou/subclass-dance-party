var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
this.punch()
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);

SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  this.$node.addClass('superHeroDancer');
  this.$node.append(hop);
};

SuperHeroDancer.prototype.punch = function() {
  //Dancer.prototype.step.call(this);
  this.$node.animate({ "left": "500px" }, "slow" ).animate({"left": this.left}, "slow")

};

var hop = '<img src = "img/hop.gif"</img>';
// SuperHeroDancer.prototype.lineUp = function() {
//   Dancer.prototype.setPosition();
// };