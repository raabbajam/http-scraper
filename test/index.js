import Debug from 'debug';
const debug = Debug('pluto:http:test');
import Promise from 'bluebird';
import test from 'tape';
import fse from 'fs-extra';
import path from 'path';
import Http from '../src';
const fs = Promise.promisifyAll(fse);
test('libs http get', (assert) => {
  const host = 'api.ipify.org';
  const uri = 'https://api.ipify.org';
  const http = Http({host, uri});
  const testUrl = 'https://api.ipify.org?format=json';
  const options = {url: testUrl, json: true};
  assert.plan(1);
  return http.get(options)
    .get('body')
    .then(({ip}) => {
      assert.equal(Boolean(ip), true, 'should get ip');
    })
    .catch(assert.end);
});

test('libs http getCookies', (assert) => {
  const host = 'api.ipify.org';
  const uri = 'https://api.ipify.org';
  const http = Http({host, uri});
  const testUrl = 'https://api.ipify.org?format=json';
  const options = {url: testUrl, json: true};
  assert.plan(1);
  http.get(options)
    .then(() => {
      const cookie = http.getCookies();
      assert.equal(cookie.length, 0);
    });
});

test('libs http setCookies', (assert) => {
  const host = 'api.ipify.org';
  const uri = 'https://api.ipify.org';
  const http = Http({host, uri});
  const cookie = 'Cookie="Cookie-NS-Ibank_Individu=ffffffff0918344b45525d5f4f58455e445a4a42378b; ' +
    'Path=/; Secure; HttpOnly; hostOnly=true; aAge=2ms; cAge=53ms"';
  assert.plan(1);
  http.setCookies(cookie);
  assert.equal(http.getCookies().length > 0, true);
});

test('libs http capture', (assert) => {
  assert.plan(1);
  const uri = 'https://google.com';
  const capture = true;
  const http = Http({uri, capture});
  const testUrl = 'https://google.com';
  const options = {url: testUrl};
  return http.get(options)
    .get('body')
    .tap(http.saveHtml('test'))
    .then(() =>
      fs.ensureFileAsync(path.resolve(__dirname, '../capture/unknown/test.html')))
    .then(() => {
      assert.pass('should create file capture');
    })
    .catch(assert.end);
});

test('libs http logs', (assert) => {
  assert.plan(2);
  const uri = 'https://google.com';
  const capture = true;
  const http1 = Http({uri, capture});
  const http2 = Http({uri, capture});
  const testUrl = 'https://google.com';
  const options = {url: testUrl};
  return http1.get(options)
    .then(() => http2.get(options))
    .then(() => {
      debug('http1.logs.length', http1.logs.length);
      debug('http2.logs.length', http2.logs.length);
      assert.ok(http1.logs.length > 1, 'should have logs');
      assert.ok(http2.logs.length > 1, 'should have logs');
    })
    .catch(assert.end);
});

test('libs http saveHtml has no side effect', (assert) => {
  assert.plan(1);
  const uri = 'https://google.com';
  const capture = true;
  const http = Http({uri, capture});
  const htmlText = '<a href="/test.html">';
  return Promise.resolve()
    .then(() => htmlText)
    .tap(http.saveHtml('test'))
    .tap(debug)
    .then((result) => assert.equal(result, htmlText, 'should return original result'))
    .catch(assert.end);
});

test('libs http saveHtml on relative path', (assert) => {
  assert.plan(1);
  const uri = 'https://google.com';
  const currentUrl = 'https://agent.lionair.co.id/LionAirAgentsIBE/OnlineBooking.aspx';
  const capture = true;
  const http = Http({uri, capture});
  const htmlText = '<a href="images/en/HdrFtr/banner_step1_2.jpg">';
  return Promise.resolve()
    .then(() => htmlText)
    .tap(http.saveHtml('test', currentUrl))
    .tap(debug)
    .then((result) => assert.equal(result, htmlText, 'should return original result'))
    .catch(assert.end);
});
