import { createStore, applyMiddleware } from 'redux';
import {fetchMoviesMiddleware} from './_02_MIddleware';
import {thunk} from 'redux-thunk';
import { moviesReducer } from './_00_Reducer';

export const moviesStore = createStore(
  moviesReducer,
  applyMiddleware(thunk, fetchMoviesMiddleware)
);
