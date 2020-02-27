const mongoose = require("mongoose");

const { app, port } = require("./src/server");

app.listen(port);
console.log(`listen on port ${port}`);
