var Rat = function(name) {
  this.name = name;
}

Rat.prototype = {
  touchFood: function(food) {
    food.poisoned = true;
  }
}

module.exports = Rat;