var Hero = function(name, health, food) {
  this.name = name;
  this.health = health;
  this.food = food;
}

Hero.prototype = {
  sayName: function() {
    return this.name;
  },
  eat: function(currentFood) {
    if (currentFood.poisoned) {
      this.health -= currentFood.replenishment
    } else {
      if (currentFood === this.food) {
        this.health += currentFood.replenishment * 1.5;
      }
      this.health += currentFood.replenishment;
    }
  }, 
  fly: function() {
    return "I am flying.";
  },
  attack: function(baddy) {
    baddy.health -= 25;
  }
}

module.exports = Hero;