import axios from "axios";
import { CONSTANTS } from "../components/_00_Constants";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const fetchMovies = (data) => ({
  type: FETCH_MOVIES,
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

export const getMovies = () => {
  return (dispatch) => {
    console.log("About to dispatch :- getMovies");
    return axios.get(CONSTANTS.backEndUrl).then((response) => {
      console.log("Axios Movies :- ", response);
      dispatch(fetchMovies(response.data));
    });
  };
};

export const createMovie = (movie) => {
  return (dispatch) => {
    return axios.post(CONSTANTS.backEndUrl, movie).then((response) => {
      console.log("response :- ", response);
      dispatch(addMovie(response.data));
    });
  };
};

export const updateMovieRequest = (id, udpatedMovie) => {
  return (dispatch) => {
    return axios
      .put(`${CONSTANTS.backEndUrl}/${id}`, udpatedMovie)
      .then((response) => {
        console.log("updateMovieRequest Response :- ", response);
        dispatch(updateMovie(response.data));
      });
  };
};

//Update your backend -> Your cache or redux store still needs to be updated
export const deleteMovieRequest = (id) => {
  return (dispatch) => {
    return axios.delete(`${CONSTANTS.backEndUrl}/${id}`).then(() => {
      dispatch(deleteMovie(id));
    });
  };
};
