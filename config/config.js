if (process.env.NODE_ENV !== "production") require('dotenv').config()
const config = {
    databaseURL:
      "mongodb+srv://stefanhallberg:surf123@surf-pyr2p.mongodb.net/test?retryWrites=true&w=majority",
      mail:"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"
  };
  
  module.exports = config;
  