const initialState = {
  name: "Rohan",
  canvas: {},
  drawingToggle: false,
  isDrawing: false,
  currentLine: {},
  strokeWidth: 2,
  strokeColor: "#000000",
  bgColor: "#ffffff",
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
  }
  if (action.type === "CHANGE-STROKE-WIDTH") {
    return {
      ...state,
      strokeWidth: action.payload,
    };
  }
  if (action.type === "CHANGE-STROKE-COLOR") {
    return {
      ...state,
      strokeColor: action.payload,
    };
  }
  if (action.type === "CHANGE-BG-COLOR") {
    return {
      ...state,
      bgColor: action.payload,
    };
  } else {
    return {
      ...state,
    };
  }
}

export default rootReducer;
