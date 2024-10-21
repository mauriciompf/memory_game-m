export const resetArrays = (...arrays: unknown[][]) => {
  arrays.forEach((arr) => (arr.length = 0));
};
