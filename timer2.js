const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdout.write(`Timer 2.0
Press 'b' to beep instantly.
if you would like to set a timer press a number from 1-9 and the timer will start running.
`);

stdin.on('data', (key) => {
  if (key === 'b')
    process.stdout.write('.');

  if (key >= 1 && key <= 9) {
    let num = Number(key);
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    console.log(num);

    const interval = setInterval(() => {
      num--;
      console.log(num);
      if (num === 0) {
        clearInterval(interval);
      }
    }, 1000);

    setTimeout(() => {
      process.stdout.write('.');
    }, (key * 1000));
  }

  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao! \n`);
    process.exit();
  }
});
