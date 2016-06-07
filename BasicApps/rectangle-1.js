//A basic node module
//Export the properties (perimeter, area) of a rectangle

exports.perimeter = function (x,y){
  return (2*(x+y))
}

exports.area = function (x,y) {
  return (x*y);
}
