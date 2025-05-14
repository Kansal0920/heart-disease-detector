// Serial port temporarily disabled for development without hardware

console.log('Serial communication is disabled. No hardware connected.');

module.exports = {
  port: null,
  parser: {
    on: () => {}, // mock 'on' method so no error occurs
  },
};
