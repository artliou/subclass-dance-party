var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  
  this.$node.addClass('blinkyDancer');
  this.$node.append(bear);
  this.$node.mouseover(function() {
    var index = window.dancers.indexOf(this);
    var tempArr = window.dancers.slice().splice(index, 1);
    var shortest = Infinity;
    var closestNode = null;
    console.log($(this).position());
    for (var i = 0; i < tempArr.length; i++) {
      var cur = tempArr[i];
      var shortest = Infinity;
      var curDistance = Math.hypot($(this).position().top - $(tempArr[i]).position().top , $(this).position().left - $(tempArr[i]).position().left);
      if (curDistance < shortest) {
        shortest = curDistance;
        closestNode = tempArr[i];
      } 
    }
    console.log(closestNode);
    $(closestNode).animate({ "left": "-=500px" }, "slow" ).animate({ "left": "+=500px" }, "slow" );
    $(this).css('border', '10px solid red');
  });
  this.$node.mouseout(function() {
    $(this).css('border', '0px solid red');
  });
};


var bear = '<img src = "img/smooch.gif"</img>';
// BlinkyDancer.prototype.lineUp = function() {
//   Dancer.prototype.setPosition();
// };

// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };