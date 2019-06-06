
// action types
const GIVE_RESOURCES = "GIVE_RESOURCES";

// initial state
const initialState = {
  lumber: 0,
  grain: 0,
  ore: 0,
  wool: 0,
  brick: 0
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
