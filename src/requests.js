const APIKEY = "8a79252d706f5867be34655cd2dd37e2";

const reqests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default reqests;
