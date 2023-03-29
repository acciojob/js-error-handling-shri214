//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    const message = `Expression should only consist of integers and +-/* characters and not ${arg}`;
    super(message);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    const message = 'Expression should not have an invalid combination of expression';
    super(message);
    this.name = this.constructor.name;
  }
}

function evalString(str) {
  const validOperators = '+-*/';
  const invalidStartOperators = '/*+';
  const invalidEndOperators = '/*-+';

  // Check for invalid combination of operators
  if (/[+\-*/]{2}/.test(str)) {
    throw new InvalidExprError();
  }

  // Check for invalid starting operator
  if (invalidStartOperators.includes(str[0])) {
    throw new SyntaxError('Expression should not start with invalid operator');
  }

  // Check for invalid ending operator
  if (invalidEndOperators.includes(str[str.length - 1])) {
    throw new SyntaxError('Expression should not end with invalid operator');
  }

  // Check if the expression only contains valid characters
  if (!/^[\d+\-*/\s]+$/.test(str)) {
    throw new OutOfRangeError(str);
  }

  // Evaluate the expression and return the result
  return eval(str);
}
try {
  const result = evalString('1 + 2 * 3 - 4 / 2');
  console.log(result); // Output: 6
} catch (error) {
  console.error(error.message);
}

