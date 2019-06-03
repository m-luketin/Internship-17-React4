import { combineReducers } from "redux";

import board from "./board";
import diceroll from "./diceroll";
import player from "./player";
import resources from "./resources";

export default combineReducers({
  board,
  diceroll,
  player,
  resources
});
