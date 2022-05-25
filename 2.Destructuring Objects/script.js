'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open : 12,
      close : 22,

    },
    fri: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 0,//open 24 hours
      close: 24,
    },
  },

  order: function(startIndex, mainIndex) {
    return [this.starterMenu[startIndex] , this.mainMenu[mainIndex ]]
},

  orderDelivery : function({startIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`
      Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
    `);
  }

};

// destructuring object

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
  name:reasturantName,
  openingHours:hours,
  categories:tags
} = restaurant;

console.log(reasturantName, hours, tags);
// const {menu=[], starterMenu:start=[]} = restaurant;
const {menu, starterMenu:start=[]} = restaurant;
console.log(menu, start);

//mutating variables
let q = 111;
let t = 999;
let v = 21;
const obj = {q:23, t:43, v:32};
({q, t, v} = obj);
console.log(q, t, v);


restaurant.orderDelivery({
  time : "22:40",
  address : "Aye SanTa Road, YandanaBon",
  startIndex : 2,
  mainIndex : 0
});


restaurant.orderDelivery({
  address : "Yangon",
  startIndex : 1,
})
