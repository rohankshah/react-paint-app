const initialState = {
  name: "Rohan",
  canvas: {},
  drawingToggle: false,
  isDrawing: false,
  currentLine: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === "SET-CANVAS-SUCCESS") {
    return {
      ...state,
      canvas: action.payload,
    };
  }
  if (action.type === "IS-DRAWING-TRUE") {
    return {
      ...state,
      isDrawing: true,
    };
  }
  if (action.type === "IS-DRAWING-FALSE") {
    return {
      ...state,
      isDrawing: false,
    };
  }
  if (action.type === "ADD-LINE-TO-CANVAS") {
    return {
      ...state,
      canvas: action.payload,
    };
  }
  if (action.type === "UPDATE-CURRENT-LINE") {
    return {
      ...state,
      currentLine: action.payload,
    };
  } else {
    return {
      ...state,
    };
  }
}

export default rootReducer;
