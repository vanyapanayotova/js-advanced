function fruit(fruit, weight, money) {
    weight = weight/1000;
    console.log(`I need $${(money*weight).toFixed(2)} to buy ${(weight).toFixed(2)} kilograms ${fruit}.`);
}