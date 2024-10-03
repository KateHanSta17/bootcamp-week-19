const path = require('path');

// TODO: Add comment explaining role of route below
// This route serves the index.html file to the client when they visit the root URL of the site.
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
