const mongoose = require("mongoose");

const { app, port } = require("./src/server");

const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(dbUrl, dbOptions).then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});

module.exports = { app, port };
