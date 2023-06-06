const initialState = {
  name: "Rohan",
  canvas: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === "SET-CANVAS-SUCCESS") {
    return {
      ...state,
      canvas: action.payload,
    };
  } else {
    return {
      ...state,
    };
  }
}

export default rootReducer;
