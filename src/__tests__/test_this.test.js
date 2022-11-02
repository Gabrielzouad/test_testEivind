import doesMath from "../test_this.js";

test("It can add 3 and 5 together using 'pluss' as the opperator and get 8 as a result", () => {
  expect(doesMath(3, 5, "pluss")).toEqual(8);
});

it("can subtract 4 from 5 and get 1, with 'minus' as the opperator", () => {
  expect(doesMath(5, 4, "minus")).toEqual(1);
});

test("it can multiply 2 times 5 to find a value of 10", () => {
  expect(doesMath(2, 5, "gange")).toEqual(10);
});

test("it can divide 100 by 10 to find the value of 10", () => {
  expect(doesMath(100, 10, "dele")).toEqual(10);
});

it("it can find the 50 procent of 100 to return the value of 50", () => {
  expect(doesMath(50, 100, "prosent")).toEqual(50);
});

it("it can multiply the value 5 with 0 to return the value of 0", () => {
  expect(doesMath(5, 0, "gange")).toEqual(0);
});

test("it can add a string with 1 and return the value of string plus 1", () => {
  expect(doesMath("string", 1, "pluss")).toEqual(undefined);
});

test("it can multiply number 5 with the boolean value true", () => {
  expect(doesMath(5, true, "gange")).toEqual(0);
});

// Write the tests necessary to evaluate if "test_this.js" can go to production.
