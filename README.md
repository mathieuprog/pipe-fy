# `pipe-fy`

`pipe-fy` allows to combine functions, calling each function with the output of the last one.

## Usage

```javascript
import { pipe } from 'pipe-fy';

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();

const person = { name: 'Mathieu' };

const result =
  pipe(
    getName,
    uppercase
  )(person);

expect(result).toBe('MATHIEU');
```

```javascript
import { pipe, pipefy } from 'pipe-fy';

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
```

## Installation

You can get `pipe-fy` via [npm](http://npmjs.com).

```bash
$ npm install pipe-fy --save
```
