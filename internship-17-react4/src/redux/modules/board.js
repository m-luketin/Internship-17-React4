import { utils } from "../../utils";
import { consts } from "../../constants";

// action types
const HANDLE_ROAD = "HANDLE_ROAD";
const HANDLE_CROSSROAD = "HANDLE_CROSSROAD";

// initial state
let fields = utils.Shuffle(consts.fieldTerrains);
let numbers = utils.AssignNumbers(fields, utils.Shuffle(consts.fieldNumbers));
const initialState = {
  fieldTerrains: fields,
  fieldNumbers: numbers,
  coloredCrossroads: consts.crossroads,
  coloredRoads: consts.roads,
  crossroadCities: consts.cities
};

// action creators
export const handleCrossroad = (
  fieldNumber,
  crossroadNumber,
  coloredCrossroads,
  player,
  setup,
  resources,
  settlements,
  crossroadCities,
  cities
) => dispatchEvent => {
  if (
    coloredCrossroads[fieldNumber][crossroadNumber] ===
    consts.players[
      player
    ] &&
    (resources[player][2] >= 3 && resources[player][1] >= 2)
  ) {
    crossroadCities[fieldNumber][crossroadNumber] = true;
    cities[player]++;
    if (!setup[0] && !setup[1]) {
      resources[player][2] -= 3;
      resources[player][1] -= 2;
    }
  }
  let newCities = Object.assign({}, crossroadCities);
  let isMoveValid = true;

  if (crossroadNumber === 0 || crossroadNumber === 2 || crossroadNumber === 4) {
    for (let i = 0; i < 6; i++) {
      if (
        coloredCrossroads[fieldNumber][i] !== "white" &&
        coloredCrossroads[fieldNumber][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[5]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[5]
          )
        ][i] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[5]
          )
        ][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[4]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[4]
          )
        ][0] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[4]
          )
        ][0] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[3]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[3]
          )
        ][0] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[3]
          )
        ][0] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[2]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[2]
          )
        ][i] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[2]
          )
        ][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[1]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[1]
          )
        ][i] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[1]
          )
        ][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[0]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[0]
          )
        ][i] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[0]
          )
        ][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[0]
        ) !== -1 &&
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[fieldNumber],
              consts.roadCoordinates[0]
            )
          ],
          consts.roadCoordinates[1]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[
              utils.FindRoadNeighbour(
                consts.fieldCoordinates[fieldNumber],
                consts.roadCoordinates[0]
              )
            ],
            consts.roadCoordinates[1]
          )
        ][5] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[
              utils.FindRoadNeighbour(
                consts.fieldCoordinates[fieldNumber],
                consts.roadCoordinates[0]
              )
            ],
            consts.roadCoordinates[1]
          )
        ][5] !== consts.players[player]
      ) {
        isMoveValid = false;
      }
    }
  } else if (
    crossroadNumber === 5 ||
    crossroadNumber === 3 ||
    crossroadNumber === 5
  ) {
    for (let i = 0; i < 6; i++) {
      if (
        coloredCrossroads[fieldNumber][i] !== "white" &&
        coloredCrossroads[fieldNumber][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[5]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[5]
          )
        ][i] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[5]
          )
        ][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[4]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[4]
          )
        ][i] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[4]
          )
        ][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[3]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[3]
          )
        ][i] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[3]
          )
        ][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[2]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[2]
          )
        ][i] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[2]
          )
        ][i] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[1]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[1]
          )
        ][5] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[1]
          )
        ][5] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[0]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[0]
          )
        ][5] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[fieldNumber],
            consts.roadCoordinates[0]
          )
        ][5] !== consts.players[player]
      ) {
        isMoveValid = false;
      } else if (
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[fieldNumber],
          consts.roadCoordinates[3]
        ) !== -1 &&
        utils.FindRoadNeighbour(
          consts.fieldCoordinates[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[fieldNumber],
              consts.roadCoordinates[3]
            )
          ],
          consts.roadCoordinates[4]
        ) !== -1 &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[
              utils.FindRoadNeighbour(
                consts.fieldCoordinates[fieldNumber],
                consts.roadCoordinates[3]
              )
            ],
            consts.roadCoordinates[4]
          )
        ][0] !== "white" &&
        coloredCrossroads[
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[
              utils.FindRoadNeighbour(
                consts.fieldCoordinates[fieldNumber],
                consts.roadCoordinates[3]
              )
            ],
            consts.roadCoordinates[4]
          )
        ][0] !== consts.players[player]
      ) {
        isMoveValid = false;
      }
    }
  }

  if (
    coloredCrossroads[fieldNumber][crossroadNumber] === "white" ||
    coloredCrossroads[fieldNumber][crossroadNumber] ===
      consts.players[player] ||
    isMoveValid
  ) {
    if (
      (resources[player][0] >= 1 &&
        resources[player][1] >= 1 &&
        resources[player][3] >= 1 &&
        resources[player][4] >= 1) ||
      (setup[0] && settlements[player] < 1) ||
      (!setup[0] && setup[1] && settlements[player] < 2)
    ) {
      coloredCrossroads[fieldNumber][crossroadNumber] = consts.players[player];

      settlements[player]++;

      if (!setup[0] && !setup[1]) {
        resources[player][0]--;
        resources[player][1]--;
        resources[player][3]--;
        resources[player][4]--;
      }
    }
  }
  dispatchEvent({
    type: HANDLE_CROSSROAD,
    payload: { coloredCrossroads, settlements, resources, crossroadCities }
  });
};

export const handleRoad = (
  fieldNumber,
  roadNumber,
  coloredRoads,
  player,
  setup,
  resources,
  roads,
  coloredCrossroads
) => dispatchEvent => {
  let isMoveValid = true;

  if (
    coloredCrossroads[fieldNumber][roadNumber % 6] !== consts.players[player] &&
    coloredCrossroads[fieldNumber][(roadNumber + 1) % 6] !==
      consts.players[player]
  ) {
    isMoveValid = false;

    switch (roadNumber) {
      case 0:
        if (
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[fieldNumber],
              consts.roadCoordinates[1]
            )
          ][5] === consts.players[player]
        )
          isMoveValid = true;
        break;
      case 1:
        if (
          coloredCrossroads[fieldNumber][1] === consts.players[player] ||
          coloredCrossroads[fieldNumber][2] === consts.players[player]
        )
          isMoveValid = true;
        break;
      case 2:
        if (
          coloredCrossroads[fieldNumber][2] === consts.players[player] ||
          coloredCrossroads[fieldNumber][3] === consts.players[player]
        )
          isMoveValid = true;
        break;
      case 3:
        if (
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[fieldNumber],
              consts.roadCoordinates[2]
            )
          ][5] === consts.players[player]
        )
          isMoveValid = true;
        break;
      case 4:
        if (
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[fieldNumber],
              consts.roadCoordinates[3]
            )
          ][0] === consts.players[player]
        )
          isMoveValid = true;
        break;
      case 5:
        if (
          coloredCrossroads[fieldNumber][2] === consts.players[player] ||
          coloredCrossroads[fieldNumber][3] === consts.players[player]
        )
          isMoveValid = true;
        break;
      default:
        break;
    }
  }

  if (
    ((resources[player][0] >= 1 && resources[player][4] >= 1) ||
      (setup[0] && roads[player] < 1) ||
      (!setup[0] && setup[1] && roads[player] < 2)) &&
    isMoveValid
  ) {
    coloredRoads[fieldNumber][roadNumber] = consts.players[player];

    roads[player]++;
    if (!setup[0] && !setup[1]) {
      resources[player][0]--;
      resources[player][4]--;
    }
  }
  dispatchEvent({
    type: HANDLE_ROAD,
    payload: { coloredRoads, roads }
  });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ROAD:
      return {
        ...state,
        coloredRoads: action.payload.coloredRoads,
        roads: action.payload.roads
      };
    case HANDLE_CROSSROAD:
      return {
        ...state,
        coloredCrossroads: action.payload.coloredCrossroads,
        settlements: action.payload.settlements,
        resources: action.payload.resources,
        crossroadCities: action.payload.crossroadCities
      };
    default:
      return { ...state };
  }
};

export default reducer;
