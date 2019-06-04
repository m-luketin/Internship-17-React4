import { combineReducers } from "redux";

import board from "./board";
import player from "./player";
import resources from "./resources";

export default combineReducers({
  board,
  player,
  resources
});
