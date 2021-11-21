/*Напишите программу, расчитывающую стоимость и калорийность гамбургера. 
Используй ООП подход 
(подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).*/

function Hamburger(size, topping = []) {
  this.size = size;
  this.toppings = [...topping];
}

Hamburger.SIZE = {
  SMALL: { name: 'little winny', price: 75, callories: 30 },
  MEDIUM: { name: 'good man', price: 50, callories: 20 },
  BIG: { name: 'big boss', price: 100, callories: 40 },
};

Hamburger.TOPPING = {
  CHEESE: { name: 'cheese', price: 10, callories: 20 },
  SALAD: { name: 'salad', price: 20, callories: 5 },
  POTATO: { name: 'potato', price: 15, callories: 10 },
  SEASONING: { name: 'seasoning', price: 15, callories: 10 },
  MOYO: { name: 'mayo', price: 20, callories: 5 },
};

Hamburger.prototype = {
   addTopping:function (...toppings) {
      this.toppings.push(...toppings);
   },
   getPrice: function () {
      return this.size.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
   },
   getCallories: function () {
      return this.size.callories + this.toppings.reduce((acc, e) => acc + e.callories, 0);
   },
};

const burger = new Hamburger(Hamburger.SIZE.BIG);

burger.addTopping(Hamburger.TOPPING.CHEESE);
burger.addTopping(Hamburger.TOPPING.SALAD);
burger.addTopping(Hamburger.TOPPING.MOYO);

console.log('Price with sauce: ' + burger.getPrice());
console.log('Callories with sauce: ' + burger.getCallories());
