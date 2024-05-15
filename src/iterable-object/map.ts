/**
 * handwriten iterable version of internal Array member function map
 */

export function map<T, U>(
  iterable: Iterable<T>,
  fn: (item: T) => U
): IterableIterator<U> {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let r = iterator.next();
      if (r.done) {
        return r;
      } else {
        return { value: fn(r.value) };
      }
    },
  };
}
