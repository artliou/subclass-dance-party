describe('PolyDancer', function() {

  var polyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    polyDancer = new PolyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(polyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(polyDancer.$node, 'toggle');
    polyDancer.step();
    expect(polyDancer.$node.toggle.called).to.be.true;
  });

  it('should have a spin function that makes its node blink', function() {
    sinon.spy(polyDancer.$node, 'toggle');
    polyDancer.spin();
    expect(polyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(polyDancer, 'step');
      expect(polyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(polyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(polyDancer.step.callCount).to.be.equal(2);
    });
  });
});
