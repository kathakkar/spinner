
spinner = ['\r|','\r/','\r-','\r\\','\r|','\r/','\r-','\r\\'];
spinnerTimeout = 100;
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i] + '  '); 
  }, spinnerTimeout);
  spinnerTimeout += 200;
}

