//This file call the node module "rectangle-2.js"
//Command file arguments are accepted with the use of the yargs node module

//To use this command use:
// node solve-3 --l=3 --b=5

var argv = require('yargs')
    .usage('Usage: node $0 --l=[num] --b=[num]')
    .demand(['l','b'])
    .argv;

var rect = require('./rectangle-2');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "  + l + " and b = " + b);
    rect(l,b, function(err,rectangle) {
	if (err) {
	    console.log(err);
	}
	else {
      console.log("The area of a rectangle of dimensions length = "  + l + " and breadth = " + b + " is " + rectangle.area());
	    console.log("The perimeter of a rectangle of dimensions length = "  + l + " and breadth = " + b + " is " + rectangle.perimeter());
	}
    });
};

solveRect(argv.l,argv.b);
