import { consts } from "../../constants";
import { utils } from "../../utils";

// action types
const SWITCH_PLAYERS = "SWITCH_PLAYERS";
const SET_NAMES = "SET_NAMES";
const RANDOMIZE_PLAYERS = "RANDOMIZE_PLAYERS";

// initial state
const initialState = {
  player: 0,
  playerNames: ["Player1", "Player2", "Player3", "Player4"],
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

export const handlePlayerNames = (
  documentToRead,
  index,
  playerState
) => dispatchEvent => {
  let playerNames = playerState.playerNames;
  switch (index) {
    case 0:
      playerNames[0] = documentToRead.getElementById("player-one").value;
      break;
    case 1:
      playerNames[1] = documentToRead.getElementById("player-two").value;
      break;
    case 2:
      playerNames[2] = documentToRead.getElementById("player-three").value;
      break;
    case 3:
      playerNames[3] = documentToRead.getElementById("player-four").value;
      break;
  }
  dispatchEvent({
    type: SET_NAMES,
    payload: { playerNames, index }
  });
};

export const randomizePlayers = (playerState) => dispatchEvent => {
  let newPlayerState = utils.Shuffle(playerState.playerNames);
  dispatchEvent({
    type: RANDOMIZE_PLAYERS,
    payload: {newPlayerState}
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
    case SET_NAMES:
      return {
        ...state,
        playerNames: action.payload.playerNames
      };
    case RANDOMIZE_PLAYERS:
      return {
        ...state,
        playerNames: action.payload.newPlayerState
      };
    default:
      return { ...state };
  }
};

export default reducer;
