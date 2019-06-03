import { consts } from "../../constants";

// action types
const SWITCH_PLAYERS = "SWITCH_PLAYERS";

// initial state
const initialState = {
  player: 0
};

// action creators
export const handlePlayers = (player) => dispatchEvent => {
  player = (player + 1) % 4;
  dispatchEvent({
    type: SWITCH_PLAYERS,
    payload: {player}
  });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_PLAYERS:
      return{
        ...state,
        player: action.payload.player
      }
    default:
      return { ...state };
  }
};

export default reducer;
