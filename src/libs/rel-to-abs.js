const cheerio = require('cheerio');
const url = require('url');
function convert(base_url, currentUrl) {
  if (!currentUrl || /^(https?|file|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i.test(currentUrl)) {
    return currentUrl;
  }
  return url.resolve(base_url, currentUrl);
}

module.exports = {
  convert(html, base_url) {
    const $ = cheerio.load(html);
    $('img, script').each((index, el) => {
      if (!el.attribs.src) {
        return;
      }
      el.attribs.src = convert(base_url, el.attribs.src);
    });

    $('a, link').each((index, el) => {
      if (!el.attribs.href) {
        return;
      }
      el.attribs.href = convert(base_url, el.attribs.href);
    });

    return $.html();
  },
};
