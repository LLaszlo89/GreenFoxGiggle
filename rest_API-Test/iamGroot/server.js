'use strict';

const routes = require('./routes');
const port = 3001;

routes.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
