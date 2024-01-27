import { createStore, applyMiddleware } from 'redux'; 
import {thunk} from 'redux-thunk';
import { moviesReducer } from './_00_Reducer';

export const newMoviestore = createStore(moviesReducer, applyMiddleware(thunk));
