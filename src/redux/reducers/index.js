import { combineReducers } from "redux";

import authReducers from "./authReducers";
import postsReducers from "./postsReducers";

export default combineReducers({
  posts: postsReducers,
  auth: authReducers,
});
