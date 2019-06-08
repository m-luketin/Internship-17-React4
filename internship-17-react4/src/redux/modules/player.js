import { utils } from "../../utils";
import { consts } from "../../constants";

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
  setup: [true, true]
};

// action creators
export const handlePlayers = (
  player,
  setup,
  resources,
  fieldTerrains,
  fieldChitNumbers,
  coloredCrossroads,
  settlements,
  cities,
  playerNames
) => dispatchEvent => {
  if (settlements[player] + cities[player] >= 10)
    window.alert(`${playerNames[player]} wins!`);

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

  let coloredCrossroadIndexes = [[], [], [], []];

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < coloredCrossroads.length; i++) {
      for (let k = 0; k < coloredCrossroads[i].length; k++) {
        if (coloredCrossroads[i][k] === consts.players[j]) {
          coloredCrossroadIndexes[j].push([i, k]);
        }
      }
    }

    let crossroadFieldCoordinates = [];
    let coloredCrossroadCoordinates = [];
    coloredCrossroadIndexes[j].forEach(coloredCrossroadIndex => {
      crossroadFieldCoordinates.push(
        consts.fieldCoordinates[coloredCrossroadIndex[0]]
      );
      coloredCrossroadCoordinates.push(
        consts.crossroadCoordinates[coloredCrossroadIndex[1]]
      );
    });

    let neighbourFieldIndexes = [];

    for (let i = 0; i < crossroadFieldCoordinates.length; i++) {
      neighbourFieldIndexes.push(
        utils.FindCrossroadNeighbours(
          crossroadFieldCoordinates[i],
          coloredCrossroadCoordinates[i]
        )
      );
    }

    let winningFieldIndexes = [];

    for (let i = 0; i < fieldChitNumbers.length; i++) {
      for (let j = 0; j < neighbourFieldIndexes.length; j++) {
        for (let k = 0; k < 3; k++) {
          if (
            fieldChitNumbers[i] === diceroll &&
            i === neighbourFieldIndexes[j][k]
          ) {
            winningFieldIndexes.push(i);
          }
        }
      }
    }

    let winningFieldTerrains = [];

    winningFieldIndexes.forEach(winningFieldIndex => {
      winningFieldTerrains.push(fieldTerrains[winningFieldIndex]);
    });

    winningFieldTerrains.forEach(winningFieldTerrain => {
      switch (winningFieldTerrain) {
        case "Forest":
          resources[j][0]++;
          break;
        case "Fields":
          resources[j][1]++;
          break;
        case "Mountains":
          resources[j][2]++;
          break;
        case "Pasture":
          resources[j][3]++;
          break;
        case "Hills":
          resources[j][4]++;
          break;
        default:
          break;
      }
    });
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
