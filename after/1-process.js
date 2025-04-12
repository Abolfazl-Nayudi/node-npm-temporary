// console.log(process.argv);
// console.log(process.argv[2]);
const values = process.argv.slice(2);
console.log(values);

for (const value of values) {
  console.log(`hello, ${value}`);
}

// ------------------ Quiz --------------------

const calc = (r) => {
  let PI = 3.14;
  console.log(r ** 2 * PI);
};

calc(process.argv[2]);

console.log(process.argv);
