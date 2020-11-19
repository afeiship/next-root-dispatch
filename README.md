# next-gm-xhr
> GM_xmlhttpRequest for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-gm-xhr
```

## apis
| api    | params | description |
| ------ | ------ | ----------- |
| get    | -      | -           |
| post   | -      | -           |
| put    | -      | -           |
| delete | -      | -           |

## usage
```js
import NxGmXhr from '@feizheng/next-gm-xhr';

const options = { timeout: 3000, /* ... */ };

// basic usage:
NxGmXhr.get('https://api.github.com/users/afeiship').then(res=>{
  console.log(res);
});
```

## resources
- https://www.tampermonkey.net/documentation.php#GM_xmlhttpRequest

## license
Code released under [the MIT license](https://github.com/afeiship/next-gm-xhr/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-gm-xhr
[version-url]: https://npmjs.org/package/@jswork/next-gm-xhr

[license-image]: https://img.shields.io/npm/l/@jswork/next-gm-xhr
[license-url]: https://github.com/afeiship/next-gm-xhr/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-gm-xhr
[size-url]: https://github.com/afeiship/next-gm-xhr/blob/master/dist/next-gm-xhr.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-gm-xhr
[download-url]: https://www.npmjs.com/package/@jswork/next-gm-xhr
