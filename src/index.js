const pipe = (...functions) => {
  return (initialValue) => {
    return functions.reduce((accumulator, fun) => {
      return fun(accumulator);
    }, initialValue);
  }
};

const pipeAsync = (...functions) => {
  return (initialValue) => {
    return doPipeAsync(functions, initialValue);
  };
};

const doPipeAsync = async (functions, accumulator) => {
  accumulator = await functions.shift()(accumulator);

  return (functions.length > 0)
    ? doPipeAsync(functions, accumulator)
    : accumulator;
};

const pipefy = (fun, ...args) => {
  return (accumulator) => fun(accumulator, ...args);
};

export {
  pipe,
  pipeAsync,
  pipefy
}
