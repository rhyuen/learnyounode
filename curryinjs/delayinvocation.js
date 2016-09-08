/*Write a unary function that takes a single input and returns another unary function.
On calling the second function, it should return the sum of the two inputs.*/

/*
I read the solution. Looks like an infinite loop of sorts.
*/


function unaryFunction(unaryArg){
  return function (secondaryUnaryArg){
    return unaryArg + secondaryUnaryArg;
  };
}

module.exports = unaryFunction;
