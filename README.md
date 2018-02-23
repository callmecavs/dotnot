# dotnot

[![dotnot on Travis](https://img.shields.io/travis/callmecavs/dotnot.svg?style=flat-square)](https://travis-ci.org/callmecavs/dotnot) [![dotnot on NPM](https://img.shields.io/npm/v/dotnot.svg?style=flat-square)](https://www.npmjs.com/package/dotnot) [![dotnot Downloads on NPM](https://img.shields.io/npm/dm/dotnot.svg?style=flat-square)](https://www.npmjs.com/package/dotnot) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Access object properties using dot notation.

### Install

```sh
$ npm install dotnot --save
```

### Use

```javascript
import {
  get,
  set
} from 'dotnot'

const data = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  },
  e: 1
}

// get (object, path) -> value
get(data, 'a.b')             // returns { c: { d: 1 } }
get(data, 'a.b.c')           // returns { d: 1 }
get(data, 'a.b.c.d')         // returns 1
get(data, 'a.c')             // returns undefined
get(data, 'a.b.d')           // returns undefined
get(data, 'a.b.c.e')         // returns undefined

// set (object, path, value) -> value
set(data, 'a.c', 1)             // returns 1
set(data, 'a.b.d', 1)           // returns 1
set(data, 'a.b.c.e', 1)         // returns 1
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea
