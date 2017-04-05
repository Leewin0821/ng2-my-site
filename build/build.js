'use strict'
let spawn = require('child_process').spawn;

let sh = 'sh', shFlag = '-c', cmd = 'ng --version';

spawn(sh, [shFlag, cmd], {
  env: process.env,
  stdio: ['pipe', process.stdout, process.stderr]
});
