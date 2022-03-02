import { pipe, pipefy } from './index';

test('setNestedProp', () => {
  const getName = (person) => person.name;
  const uppercase = (string) => string.toUpperCase();
  const repeat = (string, n) => string.repeat(n);

  const person = { name: 'Mathieu' };

  const result =
    pipe(
      getName,
      uppercase,
      pipefy(repeat, 2)
    )(person);

  expect(result).toBe('MATHIEUMATHIEU');
});
