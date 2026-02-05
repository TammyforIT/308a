export function renderStats(data) {
  const container = document.getElementById("results");

  container.innerHTML = `
    <strong>Player:</strong> ${data.account.name}<br>
    <strong>Level:</strong> ${data.battlePass.level}<br>
    <strong>Wins:</strong> ${data.stats.all.overall.wins}<br>
    <strong>K/D Ratio:</strong> ${data.stats.all.overall.kd}<br>
    <strong>Matches Played:</strong> ${data.stats.all.overall.matches}
  `;
}

export function showError(message) {
  const container = document.getElementById("results");
  container.textContent = message;
}
