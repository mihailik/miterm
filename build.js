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
  console.log('ERR> TypeScript not installed');
  console.log('ERR> Make sure to run npm install to ensure all dependencies are available.');
  process.exit(1);
}

process.stdout.write(' - build script');
var buildScript = fs.readFileSync(path.resolve(__dirname, 'src/build-script/build-script.ts')) + '';
process.stdout.write('..');
var transpiledBuildScript = ts.transpile(buildScript);
var transpileTime = Date.now() - startTime;
console.log('. prepared in '+(transpileTime/1000)+'s.');

eval(transpiledBuildScript);