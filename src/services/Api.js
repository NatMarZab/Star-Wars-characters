const getDataFromApi = () => {
  return fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cleanData = data.results;
      return cleanData;
    });
};
export default getDataFromApi;
