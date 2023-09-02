const API_KEY = "01441dea-d579-4cfc-bb4a-fd54cb0149fa"

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/series_info?apikey=01441dea-d579-4cfc-bb4a-fd54cb0149fa&offset=0&id=47b54677-34de-4378-9019-154e82b9cc1a`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
};

export const getMatchDetail = (id) => {
  const url = "https://api.cricapi.com/v1/match_info?apikey=01441dea-d579-4cfc-bb4a-fd54cb0149fa&offset=0&id=820cfd88-3b56-4a6e-9dd8-1203051140da"
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}