export const handleExceptions = () => {
  process
    .on('uncaughtException', err => {
      console.error('\nUncaught Exception: ', err, '\n');

      process.exit(1);
    })
    .on('unhandledRejection', (reason, promise) =>
      console.error(
        '\nUnhandled Rejection at:',
        promise,
        'reason:',
        reason,
        '\n'
      )
    );
}