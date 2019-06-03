import { consts } from "../../constants";

// action types

// initial state
const initialState = {
  player: consts.players[0]
};

// action creators

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;
