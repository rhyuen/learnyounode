/*
Write a function that takes one argument for each invocation.

Each time it's called, it should add its argument to a running total.

If called with zero arguments, it should return the sum of all the args passed.
*/


/*
I read the solution. Looks like an infinite loop of sorts.
*/

var total = 0;

function initFunction(arg){
  if(arguments.length === 0){
    return total;
  }else{
    return function(subsequentArg){
      total += subsequentArg;
      return arg + subsequentArg;
    };
  }
};

module.exports = initFunction;
