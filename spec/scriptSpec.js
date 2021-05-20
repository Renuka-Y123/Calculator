
describe('Calculator Functions', function () {

describe("divideTest", function () {
  const testCases = [
    { n: 2, d: 3, q: 0.6666666666666666 },
    { n: -12, d: -2, q: 6},
    { n: -12, d: 4, q: -3 },
    { n: 12, d: -3, q: -4 },
    { n: 0, d: 2, q: 0 },
    { n: -360.008, d: 5, q: -72.0016 },
    { n: -5, d: 3.123, q: -1.601024655779699 },
    { n: 0.234, d: 3.123, q: 0.07492795389048991 },
  
  ];

  testCases.forEach(test => {
    it(`should divide ${test.n} by ${test.d} correctly`, () => {
      expect(divide(test.n, test.d)).toEqual(test.q);
    });
  });

  it('Should be able to divide By Zero exception', () => {
    let divideByZero = () => {
      divide(6, 0)
    }
    expect(divideByZero).toThrowError(RangeError, 'Divide-by-zero')
  })
});


describe("Multiply", function () {
  const testCases = [
    { n: 12, d: 3, q: 36 },
    { n: 1.1234, d: 6, q: 6.740399999999999 }, 
    { n: 2.1002, d: 3.001, q: 6.3027002},
    { n: 0, d: 200, q: 0 },
    { n: -2021, d: 3, q: -6063 },
    { n: -5, d: -2.74, q: 13.700000000000001},
    { n: 0.234, d: 3.123, q: 0.730782 }
  ];

  testCases.forEach(test => {
    it(`should multiply ${test.n} by ${test.d} correctly`, () => {
      expect(multiply(test.n, test.d)).toEqual(test.q);
    });
  });
});

describe("Substract", function () {
  const testCases = [
    { n: 120,   d: 45, q: 75 },
    { n: 1.1234, d: 6, q: -4.8766 }, 
    { n: 8, d: -3.001, q: 11.001},
    { n: 0, d: 200, q: -200 },
    { n: -2021, d: -3, q: -2018 },
    { n: 8.12345678, d: 3.87654321, q: 4.24691357},
    { n: 0.29, d: 1.35, q: -1.06 },
    { n: -8.9076, d: 35, q: -43.9076}
  ];

  testCases.forEach(test => {
    it(`should substract ${test.d} from ${test.n} correctly`, () => {
      expect(subtract(test.n, test.d)).toEqual(test.q);
    });
  });
});

describe("Addition", function () {
  const testCases = [
    { n: 120,   d: 45, q: 165 },
    { n: 1.1234, d: 6, q: 7.1234 }, 
    { n: 8, d: -3.001, q: 4.9990000000000006},
    { n: 0, d: 200, q: 200 },
    { n: -2021, d: -3, q: -2024},
    { n: 8.12345678, d: 3.87654321, q: 11.99999999},
    { n: -8.9076, d: 35, q: 26.092399999999998}
  ];

  testCases.forEach(test => {
    it(`should add ${test.n} and ${test.d} correctly`, () => {
      expect(add(test.n, test.d)).toEqual(test.q);
    });
  });
});


describe("Integration Test 1", function () {
  const testCases = [ { a: 120, b: 2, c: 45, d: 3, q: 65 }];

  testCases.forEach(test => {
    it(`should calculate expression: ${test.a} * ${test.b} - ${test.c} / ${test.d} correctly`, () => {
      var r1 = multiply(test.a, test.b);
      var r2 = subtract(r1, test.c);
      var r3 = divide(r2,test.d);
       expect(r3).toEqual(test.q);
    });
  });
});

describe("Integration Test 2", function () {
  const testCases = [ { a: 120, b: 2, c: 45, d: 4, e:3, q: 74.25 } ];

  testCases.forEach(test => {
    it(`should calculate expression: ${test.a} * ${test.b} + ${test.c} / ${test.d} + ${test.e} correctly`, () => {
      var r1 = multiply(test.a, test.b);
      var r2 = add(r1, test.c);
      var r3 = divide(r2, test.d);
      var r4 = add(r3, test.e);
      expect(r4).toEqual(test.q);
    });
  });
});


});//calculator closing