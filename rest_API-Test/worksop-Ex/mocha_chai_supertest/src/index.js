
const app = require('./server');
const PORT = 3030;

const serverInstance = app.listen(PORT, () => {
  console.log('Our unicorn server hath bin started on ' + PORT);
});

module.exports = serverInstance;