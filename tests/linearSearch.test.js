const linearSearch = require("../linearSearch");

const testArray = [11, 16, 55, 40, 81, 72, 34]

describe("linearSearch", () => {
  it("should return correct index if item is in array", () => {
    itemIndex = linearSearch(testArray, 40);
    expect(itemIndex).toBe(testArray.indexOf(40));
  })

  it("should return -1 if item is not in array", () => {
    itemIndex = linearSearch(testArray, 99);
    expect(itemIndex).toBe(testArray.indexOf(99));
  })
})