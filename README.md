# `pipe-pipefy`

`pipe-pipefy` allows to combine functions, calling each function with the output of the last one.

## Usage

```javascript
import { pipe } from 'pipe-pipefy';

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
import { pipe, pipefy } from 'pipe-pipefy';

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

```javascript
import { pipe, pipefyIf } from 'pipe-pipefy';

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const repeat = (string, n) => string.repeat(n);

const person = { name: 'Mathieu' };
const someCondition = false;

const result =
  pipe(
    getName,
    uppercase,
    pipefyIf(someCondition, repeat, 2)
  )(person);

expect(result).toBe('MATHIEU');
```

```javascript
import { pipeAsync } from 'pipe-pipefy';

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const uppercaseAfterTimeout = (string) => new Promise(resolve => setTimeout(() => resolve(uppercase(string)), 50));

const person = { name: 'Mathieu' };

const result =
  pipe(
    getName,
    uppercaseAfterTimeout
  )(person);

expect(result).toBe('MATHIEU');
```

## Installation

You can get `pipe-pipefy` via [npm](http://npmjs.com).

```bash
$ npm install pipe-pipefy --save
```
