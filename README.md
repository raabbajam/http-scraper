<big><h1 align="center">http-scraper</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/http-scraper">
    <img src="https://img.shields.io/npm/v/http-scraper.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/raabbajam/http-scraper">
    <img src="https://img.shields.io/coveralls/raabbajam/http-scraper.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/raabbajam/http-scraper">
    <img src="https://img.shields.io/travis/raabbajam/http-scraper.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/http-scraper">
    <img src="http://img.shields.io/npm/dm/http-scraper.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/raabbajam/http-scraper.svg">
    <img src="https://david-dm.org/raabbajam/http-scraper.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/raabbajam/http-scraper/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/http-scraper.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
http libs with extended utilities
</big></p>


## Install

```sh
npm i -S http-scraper
```

## Usage

```js
import Http from "http-scraper"

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

[npm-url]: https://npmjs.org/package/http-scraper
[npm-image]: https://img.shields.io/npm/v/http-scraper.svg?style=flat-square

[travis-url]: https://travis-ci.org/raabbajam/http-scraper
[travis-image]: https://img.shields.io/travis/raabbajam/http-scraper.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/raabbajam/http-scraper
[coveralls-image]: https://img.shields.io/coveralls/raabbajam/http-scraper.svg?style=flat-square

[depstat-url]: https://david-dm.org/raabbajam/http-scraper
[depstat-image]: https://david-dm.org/raabbajam/http-scraper.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/http-scraper.svg?style=flat-square
