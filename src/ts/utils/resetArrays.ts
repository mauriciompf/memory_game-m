const resetArrays = (...arrays: unknown[][]) => {
  arrays.forEach((arr) => (arr.length = 0));
  return arrays;
};

export default resetArrays;
