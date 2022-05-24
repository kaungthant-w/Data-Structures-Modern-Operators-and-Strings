'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(startIndex, mainIndex) {
      return [this.starterMenu[startIndex] , this.mainMenu[mainIndex ]]
  }

};

let arr = ["am", "is", "are"];
let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

// destructuring array
const [first, second, ,fourth] = restaurant.categories;
console .log(first, second, fourth);

const [res1, res2, res3,] = restaurant.starterMenu;
console.log(res1, res2, res3)


let [main, ,secondary] = restaurant.categories;

console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary)

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 2));

// nested destructuring
const nestedArry = [2, 5, 4, [32, 43]];
const [i,j,k,[g,h]] = nestedArry;
console.log(i,j,k,g,h);

//default value
const [p,q,r] = [3,5];
console.log(p, q, r);

const [l = 1, d = 1, s = 1] = [2, 5]
console.log(l, d, s);