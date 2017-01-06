'use strict'

var reflectKeys = function(keyString) {
  var keys = keyString.match(/\S+/g) || [];
  var reflection = {};
  for (var i = 0; i < keys.length; i++) {
    reflection[keys[i]] = keys[i];
    console.log("Reflection: ",reflection);
  }
  return reflection;
}

module.exports = reflectKeys;
