// var generateName = require('sillyname');
// import generateName from "sillyName";
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`);

import superheroes, { randomSuperhero } from "superheroes";

const name = randomSuperhero();
console.log(`I am ${name}!`);