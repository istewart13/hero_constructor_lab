var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Baddy = require('../baddy');
var assert = require('chai').assert;

  describe('Rat', function(){

    beforeEach(function() {
      hero1 = new Hero("Nico", 100, "lasagna");
      food1 = new Food("pizza", 100);
      rat1 = new Rat("Iain")
    });

    it('rat has a name', function(){
      assert.equal("Iain", rat1.name);
    })

    it('food becomes poisoned if touched by rat', function(){
      rat1.touchFood(food1);
      assert.equal(true, food1.poisoned);
    })

  })