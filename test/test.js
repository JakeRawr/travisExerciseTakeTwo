'use strict';

var chai = require('chai');
var expect = chai.expect;

var Counter = require('../counter');

describe('basic travis test', function (){
  var counter;

  beforeEach(function() {
    counter = new Counter();
  });

  it('should have value zero after the object is created.', function (done) {
    expect(counter.value).to.be.eql(0);
    done();
  });

  it('should have value one more than before after increment(). Test 1', function (done) {
    counter.increment();
    expect(counter.value).to.be.eql(1);
    done();
  });

  it('should have value one more than before after increment(). Test 2', function (done) {
    counter.increment();
    expect(counter.value).to.be.eql(1);
    counter.increment();
    counter.increment();
    expect(counter.value).to.be.eql(3);
    done();
  });
});
