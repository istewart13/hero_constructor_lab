var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Baddy = require('../baddy');
var assert = require('chai').assert;

  describe('Hero', function(){

    beforeEach(function() {
      hero1 = new Hero("Nico", 100, "lasagna");
      food1 = new Food("pizza", 100);
      rat1 = new Rat("Iain");
      baddy1 = new Baddy("Brian", 180);
    });

    it('hero has a name', function(){
      assert.equal("Nico", hero1.name);
    })

    it('hero has starting health of 100', function(){
      assert.equal(100, hero1.health);
    })

    it('heros favourite food is lasagna', function(){
      assert.equal("lasagna", hero1.food);
    })

    it('hero can say their name', function(){
      assert.equal("Nico", hero1.sayName());
    })

    it('hero loses health if they eat poisoned food', function(){
      rat1.touchFood(food1);
      hero1.eat(food1);
      assert.equal(0, hero1.health);
    })

    it('hero can fly', function(){
      assert.equal("I am flying.", hero1.fly());
    })

    it('hero can attack baddy', function(){
      hero1.attack(baddy1);
      assert.equal(155, baddy1.health);
    })

  })