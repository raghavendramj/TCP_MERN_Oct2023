import axios from 'axios';
import { fetchMoviesSuccess, addMovie, updateMovie, deleteMovie } from './_01_Action';
import { CONSTANTS } from '../components/_00_Constants';

export const fetchMoviesMiddleware = (store) => (next) => (action) => {

  console.log("fetchMoviesMiddleware reached! ", action);
  console.log("action.type ", action.type);

  

  if (action.type === 'FETCH_MOVIES') {
    axios.get(CONSTANTS.backEndUrl).then((response) => {
      store.dispatch(fetchMoviesSuccess(response.data));
    });
  } else if (action.type === 'ADD_MOVIE') {
    axios.post(CONSTANTS.backEndUrl, action.payload).then((response) => {
      store.dispatch(addMovie(response.data));
    });
  } else if (action.type === 'UPDATE_MOVIE') {
    axios.put(`${CONSTANTS.backEndUrl}/${action.payload.id}`, action.payload).then(() => {
      store.dispatch(updateMovie(action.payload));
    });
  } else if (action.type === 'DELETE_MOVIE') {

    console.log("fetchMoviesMiddleware :: Delete invoked :- action.payload", action.payload);
    axios.delete(`${CONSTANTS.backEndUrl}/${action.payload}`).then(() => {
      store.dispatch(deleteMovie(action.payload));
    });
  }
  return next(action);
};