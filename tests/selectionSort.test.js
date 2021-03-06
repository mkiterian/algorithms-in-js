const selectionSort = require("../selectionSort");

describe("selectionSort", () => {
  it("should correctly sort a zero items array", () => {
    const testArray = [];
    const sortedArray = selectionSort(testArray);
    expect(sortedArray).toBe(testArray);
  });

  it("should correctly sort a one item array", () => {
    const testArray = [24];
    const sortedArray = selectionSort(testArray);
    expect(sortedArray).toBe(testArray);
  });

  it("should correctly sort a two item array", () => {
    const testArray = [22, 11];
    const sortedArray = selectionSort(testArray);
    expect(sortedArray).toEqual([11, 22]);
  });

  it("should correctly an array", () => {
    const testArray = [10, 22, 11, 15, 30, 18];
    const sortedArray = selectionSort(testArray);
    expect(sortedArray).toEqual([10, 11, 15, 18, 22, 30]);
  });
});
