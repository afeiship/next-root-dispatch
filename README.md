# next-root-dispatch
> Shortcut for window.dispatchEvent.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-root-dispatch
```

## usage
```js
import '@jswork/next-root-dispatch';

// original usage
window.dispatchEvent(new CustomEvent('resize'));
window.dispatchEvent(new CustomEvent('my-event', { detail: { foo: 'bar' } }));

// shortcut usage
nx.rootDispatch('resize');
nx.rootDispatch('my-event', { foo: 'bar' });
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-root-dispatch/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-root-dispatch
[version-url]: https://npmjs.org/package/@jswork/next-root-dispatch

[license-image]: https://img.shields.io/npm/l/@jswork/next-root-dispatch
[license-url]: https://github.com/afeiship/next-root-dispatch/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-root-dispatch
[size-url]: https://github.com/afeiship/next-root-dispatch/blob/master/dist/next-root-dispatch.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-root-dispatch
[download-url]: https://www.npmjs.com/package/@jswork/next-root-dispatch
