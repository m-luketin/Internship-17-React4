import { utils } from "../../utils";
import { consts } from "../../constants";

// action types
const HANDLE_ROAD = "HANDLE_ROAD";
const HANDLE_CROSSROAD = "HANDLE_CROSSROAD";
const HANDLE_SETUP = "HANDLE_SETUP";

// initial state
let fields = utils.Shuffle(consts.fieldTerrains);
let numbers = utils.AssignNumbers(fields, utils.Shuffle(consts.fieldNumbers));
const initialState = {
  fieldTerrains: fields,
  fieldNumbers: numbers,
  coloredCrossroads: consts.crossroads,
  coloredRoads: consts.roads
};

// action creators
export const handleCrossroad = (
  fieldNumber,
  crossroadNumber,
  coloredCrossroads,
  player,
  setup,
  resources,
  settlements
) => dispatchEvent => {
  if (
    (resources[player][0] >= 1 && resources[player][4] >= 1) ||
    (setup[0] && settlements[player] < 1) ||
    (!setup[0] && setup[1] && settlements[player] < 2)
  ) {
    //resource req not checked
    coloredCrossroads[fieldNumber][crossroadNumber] = consts.players[player];

    settlements[player]++;

    if(!setup[0] && !setup[1])
    {
      resources[player][0]--;
      resources[player][4]--;
    }
  }
  dispatchEvent({
    type: HANDLE_CROSSROAD,
    payload: { coloredCrossroads, settlements, resources }
  });
};

export const handleRoad = (
  fieldNumber,
  roadNumber,
  coloredRoads,
  player,
  setup,
  resources,
  roads
) => dispatchEvent => {
  if (
    (resources[player][0] >= 2 && resources[player][1] >= 2) ||
    (setup[0] && roads[player] < 1) ||
    (!setup[0] && setup[1] && roads[player] < 2)
  ) {
    //resource req not checked
    coloredRoads[fieldNumber][roadNumber] = consts.players[player];
    roads[player]++;
  }
  dispatchEvent({
    type: HANDLE_ROAD,
    payload: { coloredRoads, roads }
  });
};

export const handleSetup = () => dispatchEvent => {
  dispatchEvent({
    type: HANDLE_SETUP,
    payload: {}
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
        resources: action.payload.resources
      };
    case HANDLE_SETUP:
      return {
        ...state
      };
    default:
      return { ...state };
  }
};

export default reducer;
