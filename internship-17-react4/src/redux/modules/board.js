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
      consts.players[player] &&
    (resources[player][2] >= 3 && resources[player][1] >= 2)
  ) {
    crossroadCities[fieldNumber][crossroadNumber] = true;
    cities[player]++;
    if (!setup[0] && !setup[1]) {
      resources[player][2] -= 3;
      resources[player][1] -= 2;
    }
  }
  let hasNeighbourCrossroads = true;

  if (crossroadNumber === 0 || crossroadNumber === 2 || crossroadNumber === 4) {
    for (let i = 0; i < 6; i++) {
      if (
        coloredCrossroads[fieldNumber][i] !== "white" &&
        coloredCrossroads[fieldNumber][i] !== consts.players[player]
      ) {
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
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
        hasNeighbourCrossroads = false;
      }
    }
  }

  if (
    (coloredCrossroads[fieldNumber][crossroadNumber] === "white" ||
      coloredCrossroads[fieldNumber][crossroadNumber] ===
        consts.players[player]) &&
    hasNeighbourCrossroads
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
  let hasNeighbourRoads = true;

  let neighbourIndex = utils.FindRoadNeighbour(
    consts.fieldCoordinates[fieldNumber],
    consts.roadCoordinates[roadNumber]
  );

  console.log(neighbourIndex);
  console.log(roadNumber);
  if (neighbourIndex === -1) {
    if (
      coloredRoads[fieldNumber][(roadNumber - 1) % 6] !==
        consts.players[player] &&
      coloredRoads[fieldNumber][(roadNumber + 1) % 6] !== consts.players[player]
    )
      hasNeighbourRoads = false;
  } else {
    switch (roadNumber) {
      case 0:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[2]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[4]
          ) !== -1 &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[2]
            )
          ][4] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[2]
            )
          ][5] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[4]
            )
          ][1] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[4]
            )
          ][2] !== consts.players[player] &&
          coloredRoads[neighbourIndex][2] !== consts.players[player] &&
          coloredRoads[neighbourIndex][4] !== consts.players[player] &&
          coloredRoads[fieldNumber][1] !== consts.players[player] &&
          coloredRoads[fieldNumber][5] !== consts.players[player]
        ) {
          hasNeighbourRoads = false;
        }
        break;
      case 1:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[3]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[5]
          ) !== -1 &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[3]
            )
          ][0] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[3]
            )
          ][5] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[5]
            )
          ][2] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[5]
            )
          ][3] !== consts.players[player] &&
          coloredRoads[neighbourIndex][3] !== consts.players[player] &&
          coloredRoads[neighbourIndex][5] !== consts.players[player] &&
          coloredRoads[fieldNumber][0] !== consts.players[player] &&
          coloredRoads[fieldNumber][2] !== consts.players[player]
        ) {
          hasNeighbourRoads = false;
        }
        break;
      case 2:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[0]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[4]
          ) !== -1 &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[0]
            )
          ][3] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[0]
            )
          ][4] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[4]
            )
          ][0] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[4]
            )
          ][1] !== consts.players[player] &&
          coloredRoads[neighbourIndex][0] !== consts.players[player] &&
          coloredRoads[neighbourIndex][4] !== consts.players[player] &&
          coloredRoads[fieldNumber][1] !== consts.players[player] &&
          coloredRoads[fieldNumber][3] !== consts.players[player]
        ) {
          hasNeighbourRoads = false;
        }
        break;
      case 3:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[1]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[5]
          ) !== -1 &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[1]
            )
          ][4] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[1]
            )
          ][5] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[5]
            )
          ][1] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[5]
            )
          ][2] !== consts.players[player] &&
          coloredRoads[neighbourIndex][1] !== consts.players[player] &&
          coloredRoads[neighbourIndex][5] !== consts.players[player] &&
          coloredRoads[fieldNumber][2] !== consts.players[player] &&
          coloredRoads[fieldNumber][4] !== consts.players[player]
        ) {
          hasNeighbourRoads = false;
        }
        break;
      case 4:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[0]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[2]
          ) !== -1 &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[0]
            )
          ][2] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[0]
            )
          ][3] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[2]
            )
          ][0] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[2]
            )
          ][5] !== consts.players[player] &&
          coloredRoads[neighbourIndex][0] !== consts.players[player] &&
          coloredRoads[neighbourIndex][2] !== consts.players[player] &&
          coloredRoads[fieldNumber][3] !== consts.players[player] &&
          coloredRoads[fieldNumber][5] !== consts.players[player]
        ) {
          hasNeighbourRoads = false;
        }
        break;
      case 5:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[1]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[3]
          ) !== -1 &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[1]
            )
          ][3] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[1]
            )
          ][5] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[3]
            )
          ][0] !== consts.players[player] &&
          coloredRoads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[3]
            )
          ][2] !== consts.players[player] &&
          coloredRoads[neighbourIndex][1] !== consts.players[player] &&
          coloredRoads[neighbourIndex][3] !== consts.players[player] &&
          coloredRoads[fieldNumber][0] !== consts.players[player] &&
          coloredRoads[fieldNumber][4] !== consts.players[player]
        ) {
          hasNeighbourRoads = false;
        }
        break;
      default:
        break;
    }
  }

  let hasNeighbourCrossroads = true;

  if (neighbourIndex === -1) {
    if (
      coloredCrossroads[fieldNumber][roadNumber] !== consts.players[player] &&
      coloredCrossroads[fieldNumber][(roadNumber + 1) % 6] !==
        consts.players[player]
    )
      hasNeighbourCrossroads = false;
  } else {
    switch (roadNumber) {
      case 0:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[2]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[4]
          ) !== -1 &&
          coloredCrossroads[fieldNumber][0] !== consts.players[player] &&
          coloredCrossroads[fieldNumber][1] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][3] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][4] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[2]
            )
          ][5] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[4]
            )
          ][2] !== consts.players[player]
        ) {
          hasNeighbourCrossroads = false;
        }
        break;
      case 1:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[3]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[5]
          ) !== -1 &&
          coloredCrossroads[fieldNumber][1] !== consts.players[player] &&
          coloredCrossroads[fieldNumber][2] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][4] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][5] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[3]
            )
          ][0] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[5]
            )
          ][3] !== consts.players[player]
        )
          hasNeighbourCrossroads = false;
        break;
      case 2:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[0]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[4]
          ) !== -1 &&
          coloredCrossroads[fieldNumber][2] !== consts.players[player] &&
          coloredCrossroads[fieldNumber][3] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][0] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][5] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[0]
            )
          ][4] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[4]
            )
          ][1] !== consts.players[player]
        )
          hasNeighbourCrossroads = false;
        break;
      case 3:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[1]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[5]
          ) !== -1 &&
          coloredCrossroads[fieldNumber][3] !== consts.players[player] &&
          coloredCrossroads[fieldNumber][4] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][0] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][1] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[1]
            )
          ][5] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[5]
            )
          ][2] !== consts.players[player]
        )
          hasNeighbourCrossroads = false;
        break;
      case 4:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[0]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[2]
          ) !== -1 &&
          coloredCrossroads[fieldNumber][4] !== consts.players[player] &&
          coloredCrossroads[fieldNumber][5] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][1] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][2] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[0]
            )
          ][3] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[2]
            )
          ][0] !== consts.players[player]
        ) {
          hasNeighbourCrossroads = false;
        }
        break;
      case 5:
        if (
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[1]
          ) !== -1 &&
          utils.FindRoadNeighbour(
            consts.fieldCoordinates[neighbourIndex],
            consts.roadCoordinates[3]
          ) !== -1 &&
          coloredCrossroads[fieldNumber][0] !== consts.players[player] &&
          coloredCrossroads[fieldNumber][5] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][2] !== consts.players[player] &&
          coloredCrossroads[neighbourIndex][3] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[1]
            )
          ][4] !== consts.players[player] &&
          coloredCrossroads[
            utils.FindRoadNeighbour(
              consts.fieldCoordinates[neighbourIndex],
              consts.roadCoordinates[3]
            )
          ][1] !== consts.players[player]
        )
          hasNeighbourCrossroads = false;
        break;
      default:
        break;
    }
  }

  if (
    ((resources[player][0] >= 1 && resources[player][4] >= 1) ||
      (setup[0] && roads[player] < 1) ||
      (!setup[0] && setup[1] && roads[player] < 2)) &&
    (hasNeighbourCrossroads || hasNeighbourRoads)
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
