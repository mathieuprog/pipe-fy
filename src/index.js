const pipe = (...functions) => {
  return (initialValue) => {
    return functions.reduce((accumulator, fun) => {
      return fun(accumulator);
    }, initialValue);
  }
}

const pipefy = (fun, ...args) => {
  return (accumulator) => fun(accumulator, ...args);
}

export {
  pipe,
  pipefy
}
