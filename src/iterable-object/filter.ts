/**
 * A handwirten iterable version filter
 */

export function filter<T, U>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): IterableIterator<T> {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      for (;;) {
        const v = iterator.next();
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    },
  };
}
