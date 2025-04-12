const addNumber = (x, y) => {
  console.log(x + y);
};

const divideNumber = (num1, num2) => {
  console.log(num1 / num2);
};

// console.log(module);

// wrong way
// module.exports = { addNumber };
// module.exports = { divideNumber };

// correct way

const PI = 3.14;

// multiple data => better way
module.exports = { addNumber, divideNumber, data: "hello world", PI };

// 1 data
// module.exports = addNumber;
