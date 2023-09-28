const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((c, p) => 
    c + p,
   0 )
};

const multiply = function(array) {
  return array.reduce ((c, p) => 
  c * p, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  let fac = a;
  if (a > 1) {
    for (i = a - 1; i >= 1; i--) {
      fac = fac * i;
    }
    return fac;
  }
  else {
    return 1
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
