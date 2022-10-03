#!/usr/bin/node
<<<<<<< HEAD
const myObject = {
=======
let myObject = {
>>>>>>> 81e18e526ae42c7694b447cf0fe3cd061bd57dd1
  type: 'object',
  value: 12
};
console.log(myObject);

myObject.incr = function () {
<<<<<<< HEAD
  myObject.value++;
=======
  this.value++;
>>>>>>> 81e18e526ae42c7694b447cf0fe3cd061bd57dd1
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
