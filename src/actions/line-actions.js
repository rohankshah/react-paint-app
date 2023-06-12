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

function changeStrokeWidth(newWidth) {
  return {
    type: "CHANGE-STROKE-WIDTH",
    payload: newWidth,
  };
}

function changeStrokeColor(newColor) {
  return {
    type: "CHANGE-STROKE-COLOR",
    payload: newColor,
  };
}

function handleMouseDown(canvasObj, options) {
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

function handleMouseMove(options) {
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

function handleMouseUp() {
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
    canvasObj._setOptions({ isDrawingMode: false });
    canvasObj._setOptions({ selection: false });
    canvasObj.on("mouse:down", (options) =>
      dispatch(handleMouseDown(canvasObj, options))
    );
    canvasObj.on("mouse:move", (options) => dispatch(handleMouseMove(options)));
    canvasObj.on("mouse:up", (options) =>
      dispatch(handleMouseUp(canvasObj, options))
    );
  };
}

function handleSelectButton() {
  return (dispatch, state) => {
    let canvasObj = state().canvas;
    canvasObj.__eventListeners = {};
    canvasObj._setOptions({ isDrawingMode: false });
    canvasObj._setOptions({ selection: true });
    dispatch(updateCanvas(canvasObj));
  };
}

function handleFreeDrawButton() {
  return (dispatch, state) => {
    console.log("free draw");
    let canvasObj = state().canvas;
    canvasObj.__eventListeners = {};
    canvasObj._setOptions({ selection: false });
    canvasObj._setOptions({ isDrawingMode: true });
    canvasObj.freeDrawingBrush.color = state().strokeColor;
    canvasObj.freeDrawingBrush.width = state().strokeWidth;
    dispatch(updateCanvas(canvasObj));
  };
}

function handleStrokeWidthChange(newWidth) {
  return (dispatch, state) => {
    dispatch(changeStrokeWidth(newWidth));
    let canvasObj = state().canvas;
    canvasObj.freeDrawingBrush.width = state().strokeWidth;
    dispatch(updateCanvas(canvasObj));
  };
}

function handleStrokeColorChange(newColor) {
  return (dispatch, state) => {
    dispatch(changeStrokeColor(newColor));
    let canvasObj = state().canvas;
    canvasObj.freeDrawingBrush.color = state().strokeColor;
    dispatch(updateCanvas(canvasObj));
  };
}

export {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleMakeLineButton,
  handleSelectButton,
  handleFreeDrawButton,
  handleStrokeWidthChange,
  handleStrokeColorChange,
};
