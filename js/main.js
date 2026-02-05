import { API_URL, API_KEY } from "./config.js";
import { renderStats, showError } from "./ui.js";

async function fetchStats(username) {
  const url = `${API_URL}?name=${encodeURIComponent(username)}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: API_KEY
      }
    });

    return response.data.data;
  } catch (err) {
    throw new Error("User not found or API error");
  }
}

document.querySelector("#searchBtn").addEventListener("click", async () => {
  const username = document.querySelector("#username").value.trim();

  if (!username) {
    showError("Please enter a username.");
    return;
  }

  try {
    const data = await fetchStats(username);
    renderStats(data);
  } catch (err) {
    showError(err.message);
  }
});
