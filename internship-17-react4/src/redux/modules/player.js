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
  setup: [true, true],
  resources: consts.resources
};

// action creators
export const handlePlayers = (player, setup) => dispatchEvent => {
  console.log("brrra");
  if (player === 0 && !setup[0]) setup[1] = false;

  let diceroll;
  setup[1]
    ? (diceroll = 0)
    : (diceroll = (Math.floor(Math.random() * 100) % 11) + 2);

  if (!setup[0] && setup[1]) player = (player - 1) % 4;
  else player = (player + 1) % 4;

  if (player === 3) {
    setup[0] = false;
  }

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
      if (playerNames[0] === "") playerNames[0] = "Player1";
      break;
    case 1:
      playerNames[1] = documentToRead.getElementById("player-two").value;
      if (playerNames[1] === "") playerNames[1] = "Player1";
      break;
    case 2:
      playerNames[2] = documentToRead.getElementById("player-three").value;
      if (playerNames[2] === "") playerNames[2] = "Player1";
      break;
    case 3:
      playerNames[3] = documentToRead.getElementById("player-four").value;
      if (playerNames[3] === "") playerNames[3] = "Player1";
      break;
    default:
      break;
  }
  dispatchEvent({
    type: SET_NAMES,
    payload: { playerNames, index }
  });
};

export const randomizePlayers = playerState => dispatchEvent => {
  let newPlayerState = utils.Shuffle(playerState.playerNames);
  dispatchEvent({
    type: RANDOMIZE_PLAYERS,
    payload: { newPlayerState }
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
