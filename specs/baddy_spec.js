var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Baddy = require('../baddy');
var assert = require('chai').assert;

  describe('Rat', function(){

    beforeEach(function() {
      hero1 = new Hero("Nico", 100, "lasagna");
      food1 = new Food("pizza", 100);
      rat1 = new Rat("Iain");
      baddy1 = new Baddy("Brian", 180);
    });

    it('baddy has a name', function(){
      assert.equal("Brian", baddy1.name);
    })

    it('baddy has health', function(){
      assert.equal(180, baddy1.health);
    })

    it('baddy can attack a hero', function(){
      baddy1.attack(hero1);
      assert.equal(80, hero1.health);
    })

    it('baddy can double attack a hero', function(){
      baddy1.doubleAttack(hero1);
      assert.equal(60, hero1.health);
    })

  })