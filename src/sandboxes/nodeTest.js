const { exec, execFile } = require("child_process");

console.log('__dirname', __dirname)
execFile(__dirname + '/promises.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});
