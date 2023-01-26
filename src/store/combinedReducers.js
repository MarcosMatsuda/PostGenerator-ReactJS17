/*
 *
 * Combine all reducers in the this file
 * and export them.
 *
 */
import { combineReducers } from "redux";

import posts from './posts/ducks';

const combinedReducers = combineReducers({
  posts,
});

export default combinedReducers;