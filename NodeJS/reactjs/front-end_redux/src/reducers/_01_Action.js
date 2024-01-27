export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const fetchMoviesSuccess = (data) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: data,
});

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  payload: movie,
});

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: movieId,
});
