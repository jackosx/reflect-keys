'use strict'

var reflectKeys = function(keyString) {
  var keys = keyString.match(/\S+/g) || []];
  var reflection = {};
  for (key in keys) {
    reflection[key] = [key];
  }
  return reflection;
}

module.exports = reflectKeys;
