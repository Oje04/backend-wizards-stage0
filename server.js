// Load environment variables from .env file
require('dotenv').config();

// Import necessary libraries
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// Create an Express application
const app = express();

// Load values from .env (with default fallbacks)
const PORT = process.env.PORT || 3000;
const NAME = process.env.NAME || 'David Ojeifo';
const EMAIL = process.env.EMAIL || 'officialdave59@outlook.com';
const STACK = process.env.STACK || 'Node.js/Express';
const CATFACT_API = process.env.CATFACT_API || 'https://catfact.ninja/fact';
const CATFACT_TIMEOUT_MS = Number(process.env.CATFACT_TIMEOUT_MS) || 2000;

// Middlewares
app.use(cors()); // allows cross-origin requests
app.use(express.json()); // parses JSON body data
app.use(morgan('dev')); // logs HTTP requests

// Optional: rate limiter (security best practice)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per minute
});
app.use(limiter);

// Function to fetch a cat fact
async function fetchCatFact() {
  try {
    const response = await axios.get(CATFACT_API, { timeout: CATFACT_TIMEOUT_MS });
    if (response?.data?.fact) {
      return response.data.fact;
    } else {
      console.error('Cat Fact API returned unexpected data:', response.data);
      return 'Cat facts are sleeping right now. Try again soon!';
    }
  } catch (error) {
    console.error('Error fetching cat fact:', error.message);
    return 'Could not fetch a cat fact at the moment.';
  }
}

// Main endpoint: GET /me
app.get('/me', async (req, res) => {
  const fact = await fetchCatFact();
  const payload = {
    status: 'success',
    user: {
      email: EMAIL,
      name: NAME,
      stack: STACK,
    },
    timestamp: new Date().toISOString(),
    fact,
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(payload);
});

// Optional: health check route
app.get('/', (req, res) => {
  res.send('Server is running! 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});