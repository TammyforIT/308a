export function renderStats(data) {
  const container = document.getElementById("results");

  container.innerHTML = 
    "Player: " + data.epicUserHandle + "<br>" +
    "Wins: " + data.lifeTimeStats[8].value + "<br>" +
    "K/D Ratio: " + data.lifeTimeStats[11].value + "<br>" +
    "Matches Played: " + data.lifeTimeStats[7].value;
}

export function showError(message) {
  const container = document.getElementById("results");
  container.textContent = message;
}