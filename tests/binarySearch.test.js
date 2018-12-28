const binarySearch = require("../binarySearch");

const testNumbersOdd = [20, 21, 22, 23, 24, 25, 26, 27, 28];
const testNumbersEven = [...testNumbersOdd, 30];

describe("binarySearch", () => {
  it("should find value in one item array", () => {
    const itemIndex = binarySearch([24], 24);
    expect(itemIndex).toBe(0);
  });
  it("should find value in odd numbered array", () => {
    const itemIndex = binarySearch(testNumbersOdd, 24);
    expect(itemIndex).toBe(testNumbersOdd.indexOf(24));
  });
  it("should find value in even numbered array", () => {
    const itemIndex = binarySearch(testNumbersEven, 22);
    expect(itemIndex).toBe(testNumbersEven.indexOf(22));
  });
  it("should return -1 if item is not in array", () => {
    const itemIndex = binarySearch(testNumbersEven, 99);
    expect(itemIndex).toBe(-1);
  });
});
