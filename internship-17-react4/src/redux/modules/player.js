import { consts } from "../../constants";

// action types
const SWITCH_PLAYERS = "SWITCH_PLAYERS";

// initial state
const initialState = {
  player: 0,
  diceroll: 0,
  settlements: [0, 0, 0, 0],
  cities: [0, 0, 0, 0],
  roads: [0, 0, 0, 0],
  setup: true,
  resources: consts.resources
};

// action creators
export const handlePlayers = (player, setup) => dispatchEvent => {
  if (player === 3) setup = false;

  let diceroll;
  setup
    ? (diceroll = 0)
    : (diceroll = (Math.floor(Math.random() * 100) % 11) + 2);

  player = (player + 1) % 4;
  dispatchEvent({
    type: SWITCH_PLAYERS,
    payload: { player, diceroll, setup }
  });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_PLAYERS:
      return {
        ...state,
        player: action.payload.player,
        diceroll: action.payload.diceroll,
        setup: action.payload.setup
      };
    default:
      return { ...state };
  }
};

export default reducer;
