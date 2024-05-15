import { map } from "../map";

it("map test", () => {
  let arr = [1, 2, 3];
  const fn = function (val: number) {
    return val + 1;
  };
  const it = map(arr, fn);
  expect([...it[Symbol.iterator]()]).toStrictEqual([2, 3, 4]);
});
