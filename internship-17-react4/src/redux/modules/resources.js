import {consts} from "../../constants";
// action types

// initial state
const initialState = {
  resources: consts.resources
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
