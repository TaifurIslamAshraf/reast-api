require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 3001,
  },

  dbUrl: {
    url: process.env.DB_URL,
  },
};

module.exports = dev;
