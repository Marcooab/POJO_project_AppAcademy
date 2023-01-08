/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here
  for(const prop in obj1){
    const chave1 = Object.keys(obj1)
    const value1 = Object.values(obj1) 
  }
  for(const prop in obj2){
    const chave2 = Object.keys(obj1)
    const value2 = Object.values(obj1) 
    
  }
  return chave1, value1
 
}

let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;