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
  coloredCrossroads: consts.crossroads
};

// action creators
export const handleCrossroad = (
  fieldNumber,
  crossroadNumber
) => dispatchEvent => {
  dispatchEvent({
    type: HANDLE_CROSSROAD,
    payload: { fieldNumber, crossroadNumber }
  });
};

export const handleRoad = () => dispatchEvent => {
  dispatchEvent({
    type: HANDLE_ROAD,
    payload: {}
  });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ROAD:
      return {
        ...state
      };
    case HANDLE_CROSSROAD:
      return Object.assign({}, state, {
        coloredCrossroads: [
          ...state.coloredCrossroads.slice(0, action.payload.fieldNumber - 1),
          [
            ...state.coloredCrossroads[action.payload.fieldNumber].slice(
              0,
              action.payload.crossroadNumber - 1
            ),
            "red",
            ...state.coloredCrossroads[action.payload.fieldNumber].slice(
              action.payload.crossroadNumber + 1,
              action.payload.coloredCrossroads[action.payload.fieldNumber]
                .length - 1
            )
          ],
          ...state.coloredCrossroads.slice(
            action.payload.fieldNumber + 1,
            state.coloredCrossroads.length - 1
          )
        ]
      })
    default:
      return { ...state };
  }
};

export default reducer;
