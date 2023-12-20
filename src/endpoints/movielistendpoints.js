export const getMoviesList = async (page = 1) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVkNDdkZDE4MTU3ZjEyNTkyYjVlMDU5OWZjNTVjNCIsInN1YiI6IjY1ODE0MGQwOGRiYzMzMDg3NDlhMzkxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dogez9Yd0QXx7m1J5aEZp_dQ283SOGMcCYGeYLQucwo",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    options
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });

  return response;
};
export const searchMoviesList = async (params) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVkNDdkZDE4MTU3ZjEyNTkyYjVlMDU5OWZjNTVjNCIsInN1YiI6IjY1ODE0MGQwOGRiYzMzMDg3NDlhMzkxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dogez9Yd0QXx7m1J5aEZp_dQ283SOGMcCYGeYLQucwo",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${params.value}&include_adult=false&language=en-US&page=${params.page}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
};
