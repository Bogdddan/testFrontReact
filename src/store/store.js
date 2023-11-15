import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoriteReducers} from './favorites/favoritesSlice';

const reducers = combineReducers({
  favorites: favoriteReducers
})

export const store = configureStore({
  reducer: reducers,
})
