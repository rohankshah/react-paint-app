import { fabric } from "fabric";

function isDrawingTrue() {
  return {
    type: "IS-DRAWING-TRUE",
  };
}
function isDrawingFalse() {
  return {
    type: "IS-DRAWING-FALSE",
  };
}

function updateCanvas(canvasObj) {
  return {
    type: "ADD-LINE-TO-CANVAS",
    payload: canvasObj,
  };
}

function updateCurrentLine(lineObj) {
  return {
    type: "UPDATE-CURRENT-LINE",
    payload: lineObj,
  };
}

function updateCurrentCircle(circleObj) {
  return {
    type: "UPDATE-CURRENT-CIRCLE",
    payload: circleObj,
  };
}

function handleMouseDownLine(canvasObj, options) {
  return (dispatch, state) => {
    const { e } = options;
    const { offsetX, offsetY } = e;
    dispatch(isDrawingTrue());
    let line = new fabric.Line([offsetX, offsetY, offsetX, offsetY], {
      stroke: state().strokeColor,
      strokeWidth: state().strokeWidth,
    });
    canvasObj.add(line);
    dispatch(updateCurrentLine(line));
    dispatch(updateCanvas(canvasObj));
  };
}

function handleMouseMoveLine(options) {
  return (dispatch, state) => {
    let isDrawing = state().isDrawing;
    if (isDrawing) {
      const { e } = options;
      const { offsetX, offsetY } = e;
      let lineObj = state().currentLine;
      let canvasObj = state().canvas;
      if (Object.keys(lineObj).length !== 0) {
        lineObj.set({ x2: offsetX, y2: offsetY });
        lineObj.set({ dirty: true });
        canvasObj.renderAll();
        dispatch(updateCurrentLine(lineObj));
        dispatch(updateCanvas(canvasObj));
      }
    }
  };
}

function handleMouseUpLine() {
  return (dispatch, state) => {
    dispatch(isDrawingFalse());
    let canvasObj = state().canvas;
    canvasObj.renderAll();
    dispatch(updateCanvas(canvasObj));
  };
}

function handleMouseDownCircle(canvasObj, options) {
  return (dispatch, state) => {
    const { e } = options;
    const { offsetX, offsetY } = e;
    dispatch(isDrawingTrue());
    var circle = new fabric.Circle({
      radius: 0,
      stroke: state().strokeColor,
      strokeWidth: state().strokeWidth,
      fill: "rgba(255, 0, 0, 0.0)",
      left: offsetX,
      top: offsetY,
    });
    canvasObj.add(circle);
    dispatch(updateCurrentCircle(circle));
  };
}

function handleMouseMoveCircle(options) {
  return (dispatch, state) => {
    let isDrawing = state().isDrawing;
    if (isDrawing) {
      const { e } = options;
      const { offsetX, offsetY } = e;
      let circleObj = state().currentCircle;
      let canvasObj = state().canvas;
      if (Object.keys(circleObj).length !== 0) {
        circleObj.set({ radius: Math.abs((offsetX - circleObj.left) / 2) });
        circleObj.set({ dirty: true });
        canvasObj.renderAll();
        dispatch(updateCurrentCircle(circleObj));
        dispatch(updateCanvas(canvasObj));
      }
    }
  };
}

function handleMouseUpCircle() {
  return (dispatch, state) => {
    dispatch(isDrawingFalse());
    let canvasObj = state().canvas;
    canvasObj.renderAll();
    dispatch(updateCanvas(canvasObj));
  };
}

function handleMakeLineButton() {
  return (dispatch, state) => {
    let canvasObj = state().canvas;
    canvasObj.__eventListeners = {};
    canvasObj._setOptions({ isDrawingMode: false });
    canvasObj._setOptions({ selection: false });
    canvasObj.on("mouse:down", (options) =>
      dispatch(handleMouseDownLine(canvasObj, options))
    );
    canvasObj.on("mouse:move", (options) =>
      dispatch(handleMouseMoveLine(options))
    );
    canvasObj.on("mouse:up", (options) =>
      dispatch(handleMouseUpLine(canvasObj, options))
    );
  };
}

function handleMakeCircleButton() {
  return (dispatch, state) => {
    let canvasObj = state().canvas;
    canvasObj.__eventListeners = {};
    canvasObj._setOptions({ isDrawingMode: false });
    canvasObj._setOptions({ selection: false });
    canvasObj.on("mouse:down", (options) =>
      dispatch(handleMouseDownCircle(canvasObj, options))
    );
    canvasObj.on("mouse:move", (options) =>
      dispatch(handleMouseMoveCircle(options))
    );
    canvasObj.on("mouse:up", (options) =>
      dispatch(handleMouseUpCircle(canvasObj, options))
    );
  };
}

export { handleMakeLineButton, handleMakeCircleButton };
