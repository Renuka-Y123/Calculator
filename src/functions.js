function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  let value = (a * 1.0) / b
  if (!isFinite(value)) throw new RangeError('Divide-by-zero')
  else return value
}

// // Module Exports

// module.exports = {
//   add: add,
//   subtract: subtract,
//   multiply: multiply,
//   divide: divide
// }
