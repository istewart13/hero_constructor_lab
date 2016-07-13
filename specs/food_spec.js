var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Baddy = require('../baddy');
var assert = require('chai').assert;

  describe('Food', function(){

    beforeEach(function() {
      hero1 = new Hero("Nico", 100, "lasagna");
      food1 = new Food("pizza", 100);
    });

    it('food has a name', function(){
      assert.equal("pizza", food1.name);
    })

    it('food has a replenishment value', function(){
      assert.equal(100, food1.replenishment);
    })

    it('hero can eat food and is replenished', function(){
      hero1.eat(food1);
      assert.equal(200, hero1.health);
    })

    it('hero can eat favourite food and is replenished by 1.5', function(){
      hero1.eat(food1);
      assert.equal(200, hero1.health);
    })

    it('food is not poisoned by default', function(){
      hero1.eat(food1);
      assert.equal(200, hero1.health);
    })
    
  })