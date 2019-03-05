const authHeader = new Headers({
  "X-Auth-Token": "fb0e1857bab5496f93903d5d015f9ff3"
});

export const fetchData = async () => {
  try {
    const response = await fetch(
      "http://api.football-data.org/v2/competitions/PD/standings",
      {
        headers: authHeader
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
