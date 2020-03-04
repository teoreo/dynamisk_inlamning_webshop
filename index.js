const mongoose = require("mongoose");
const config = require("./config/config")
const { app, port } = require("./src/server");

const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(config.databaseURL, dbOptions).then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});

module.exports = { app, port };
