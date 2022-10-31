import doesMath from "../test_this.js";

test("It can add 3 and 5 together using 'pluss' as the opperator and get 8 as a result", () => {
  expect(doesMath(3, 5, "pluss")).toEqual(8);
});

it("can subtract 4 from 5 and get 1, with 'minus' as the opperator", () => {
  expect(doesMath(5, 4, "minus")).toEqual(1);
});

// Write the tests necessary to evaluate if "test_this.js" can go to production.