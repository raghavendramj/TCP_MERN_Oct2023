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
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};