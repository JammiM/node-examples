//The purpose of this file is to call the node module "rectangle-1.js"

var rect = require('./rectangle-1');


//This function simply returns the perimeter and area of a rectangle
function solveRect(l,w) {
  console.log("lenght: " + l + " Width: " + w);

  if (l < 0 || w < 0){
    console.log("Dimensions should be greater than zero !!!");
  } else {
    console.log("Perimeter is :" + rect.perimeter(l,w));
    console.log("Area is : " + rect.area(l,w));
  }//else
}//solveRect


solveRect(2,5);
