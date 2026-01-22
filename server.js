require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.')); // Serve static files from root

app.get('/api/stats/:username', async (req, res) => {
  const username = req.params.username;
  const API_KEY = process.env.TRN_API_KEY;
  const url = `https://api.fortnitetracker.com/v1/profile/pc/${username}`;

  try {
    const response = await fetch(url, {
      headers: {
        'TRN-Api-Key': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Player not found or API error');
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});