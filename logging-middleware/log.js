
const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/evaluation-service/logs';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmJxMWEwNW8zQHZ2aXQubmV0IiwiZXhwIjoxNzU0MDI4MTEyLCJpYXQiOjE3NTQwMjcyMTIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIwNTY3ZmJkZS1jZWU3LTQ3NDEtYjIyZS0wZWY1MjJmZmE0MDgiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtdWtlc2ggeWFyYWdvcHUiLCJzdWIiOiJhYmViMjE5Yi1iZTk0LTQzZDUtOGVlMy02ZGI2Y2Y0Mzg4OGQifSwiZW1haWwiOiIyMmJxMWEwNW8zQHZ2aXQubmV0IiwibmFtZSI6Im11a2VzaCB5YXJhZ29wdSIsInJvbGxObyI6IjIyYnExYTA1bzMiLCJhY2Nlc3NDb2RlIjoiUG5WQkZWIiwiY2xpZW50SUQiOiJhYmViMjE5Yi1iZTk0LTQzZDUtOGVlMy02ZGI2Y2Y0Mzg4OGQiLCJjbGllbnRTZWNyZXQiOiJhdXNDV1BCRFR3SHZhQVB2In0.scejlZM_vSdAysoD-gXAEzAY_arE2aBILK0I6B8kbEA';

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
