import { filter } from "../filter";

it("filter should use with destructor operator ...", () => {
  let arr = [1, 3, 4];
  expect([...filter(arr, (item) => item % 2 === 0)]).toStrictEqual([4]);
});
