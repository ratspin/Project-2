var food = require('./food.json');    
var user = require('./users.json');     
var calculate = require("./calculate.js");

var weight_user = calculate.Weight(user) 
var weight_food = calculate.Weight(food) 
var similar = calculate.similar_score 
var result = calculate.similar_sort(weight_user,weight_food,similar,65)


// console.log(user)

module.exports = result;


