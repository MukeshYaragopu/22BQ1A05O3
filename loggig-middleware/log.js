
const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/evaluation-service/logs';
const ACCESS_TOKEN = 'your-real-access-token-here';

const log = async (stack, level, pkg, message) => {
  try {
    await axios.post(
      BASE_URL,
      { stack, level, package: pkg, message },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (err) {
    console.error('Logging failed:', err.message);
  }
};

module.exports = log;
