import { combineReducers } from "redux";

import posts from "./postsReducers";
import auth from "./authReducers";

export const reducers = combineReducers({ posts, auth });
