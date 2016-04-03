/* eslint no-var: 0 */
var hook = require('css-modules-require-hook');
var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];
require('babel-register')();

// Configre css import for tests
hook({
  generateScopedName: '[local]',
});

// Configure document and window for tests
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
