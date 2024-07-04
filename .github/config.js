// config.js

const config = {
  // Server settings
  server: {
    port: 3000,
    hostname: 'localhost',
  },

  // Database settings
  database: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase',
  },

  // Application settings
  app: {
    name: 'MyApp',
    version: '1.0.0',
    secret: 'supersecretkey',
  },

  // API settings
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000,
  },
};

module.exports = config;
