const initialState = {
  name: "Rohan",
  canvas: {},
  drawingToggle: false,
  isDrawing: false,
  currentLine: {},
  currentCircle: {},
  strokeWidth: 2,
  strokeColor: "#000000",
  bgColor: "#ffffff",
  createName: "",
  joinName: "",
  begun: false,
  inviteCanvasObject: {},
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
  if (action.type === "UPDATE-CURRENT-CIRCLE") {
    return {
      ...state,
      currentCircle: action.payload,
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
  }
  if (action.type === "ADD-CREATE-USER") {
    return {
      ...state,
      createName: action.payload,
    };
  }
  if (action.type === "SESSION-CREATE-SUCCESS") {
    return {
      ...state,
      begun: true,
    };
  }
  if (action.type === "SESSION-JOIN-SUCCESS") {
    return {
      ...state,
      begun: true,
      inviteCanvasObject: action.payload.canvas,
      code: action.payload.code,
    };
  } else {
    return {
      ...state,
    };
  }
}

export default rootReducer;
