export const Api = () => {
    return fetch("https://api.unsplash.com/search/photos?count=7&query=fun&client_id=" + process.env.REACT_APP_API_KEY).then(
      (response) => {
        if (response.ok) return response.json();
        throw new Error("Something went wrong while requesting the data");
      }
    );
  };
  