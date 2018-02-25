declare var fs, path;
var child_process = require('child_process');
var cluster = require('cluster');


if (!cluster.isMaster) {
  runTSWorker();
}
else {
  runMain();
}

function runMain() {
  // TODO: if process.argv has "--watch", then build in watch mode, otherwise build once (no cluster)
}

function runTSWorker() {
  // TODO: listen to message - then build or do something else
}