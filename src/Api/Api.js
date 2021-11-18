const clientId = '1d-bmL5qZug0yGUgEKLxeTpHCw29bX8WEzKUWctXmvU';
export const Api = () => {
    return fetch("https://api.unsplash.com/search/photos?page=1&query=users&client_id=" + clientId).then(
      (response) => {
        if (response.ok) return response.json();
        throw new Error("Something went wrong while requesting the data");
      }
    );
  };
  