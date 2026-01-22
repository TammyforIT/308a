import { renderStats, showError } from "./ui.js";

async function fetchStats(username) {
  const response = await fetch(`/api/stats/${username}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  return response.json();
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
//getelementbyid could work too.