try {
  var fs = require('fs');
  var path = require('path');
  var startTime = Date.now();
}
catch (error) {
  throw new Error('Not a node environment.');
}

process.stdout.write('mini terminal');

try {
  var ts = require('typescript');
}
catch (error) {
  throw new Error(' TypeScript not installed (run npm install)');
}

//TODO: build