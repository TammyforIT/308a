require("dotenv").config();

export async function fetchStats(username) {
  const API_KEY = process.env.TRN_API_KEY;   // ← pulls from .env

  const url = `https://api.fortnitetracker.com/v1/profile/pc/${username}`;

  const response = await fetch(url, {
    headers: {
      "TRN-Api-Key": API_KEY
    }
  });

  if (!response.ok) {
    throw new Error("Player not found or API error");
  }

  return response.json();
}
