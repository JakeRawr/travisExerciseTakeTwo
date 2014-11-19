'use strict';

function Counter (){
  this.value = 0;
  this.constructor.prototype.increment = function (){
    this.value++;
  };

  this.constructor.prototype.getValue = function (){
    return this.value;
  };
}

module.exports = Counter;
