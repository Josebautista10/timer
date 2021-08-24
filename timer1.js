const Input = process.argv.slice(2);

const timer = Input => {
  for (const timer of Input) {

    switch (true) {
    case timer < 0:
    case isNaN(timer):
      continue;
    default:
      setTimeout(() => {
        process.stdout.write('.');
      }, (timer * 1000));
    }
  }
};

timer(Input);