var Baddy = function(name, health) {
  this.name = name;
  this.health = health;
}

Baddy.prototype = {
  attack: function(hero) {
    hero.health -= 20;
  },
  doubleAttack: function(hero) {
    hero.health -= 40;
  }
}

module.exports = Baddy;