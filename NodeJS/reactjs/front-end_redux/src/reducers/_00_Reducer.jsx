import { FETCH_MOVIES, ADD_MOVIE, UPDATE_MOVIE, DELETE_MOVIE } from './_01_Action';

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  console.log("action -> ", action);
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
      //This just updates the state!
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    default:
      return state;
  }
};