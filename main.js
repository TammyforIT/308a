async function fetchStats(username) {
  const url = `https://fortnite-api.com/v1/stats/br/v2?name=${username}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "93fb34ee-3907-4120-9dd6-4951eb712ca0"
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
//getelementbyid could work too.