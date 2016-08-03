<big><h1 align="center">pluto-http</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/pluto-http">
    <img src="https://img.shields.io/npm/v/pluto-http.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/raabbajam/pluto-http">
    <img src="https://img.shields.io/coveralls/raabbajam/pluto-http.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/raabbajam/pluto-http">
    <img src="https://img.shields.io/travis/raabbajam/pluto-http.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/pluto-http">
    <img src="http://img.shields.io/npm/dm/pluto-http.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/raabbajam/pluto-http.svg">
    <img src="https://david-dm.org/raabbajam/pluto-http.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/raabbajam/pluto-http/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/pluto-http.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
http libs with extended utilities
</big></p>


## Install

```sh
npm i -S pluto-http
```

## Usage

```js
import Http from "pluto-http"

const host = 'api.ipify.org';
const uri = 'https://api.ipify.org';
const options = {host, uri};
const http = Http(options);
return http.get(options)
  .get('body')
  .then(({ip}) => {
    assert.equal(Boolean(ip), true, 'should get ip');
  })
  .catch(assert.end);
```

For more usage information, check tests directory.

## License

MIT © [Raabb Ajam](http://github.com/raabbajam)

[npm-url]: https://npmjs.org/package/pluto-http
[npm-image]: https://img.shields.io/npm/v/pluto-http.svg?style=flat-square

[travis-url]: https://travis-ci.org/raabbajam/pluto-http
[travis-image]: https://img.shields.io/travis/raabbajam/pluto-http.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/raabbajam/pluto-http
[coveralls-image]: https://img.shields.io/coveralls/raabbajam/pluto-http.svg?style=flat-square

[depstat-url]: https://david-dm.org/raabbajam/pluto-http
[depstat-image]: https://david-dm.org/raabbajam/pluto-http.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/pluto-http.svg?style=flat-square
