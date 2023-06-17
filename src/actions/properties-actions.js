import { realTimeUpdate } from "./session-actions";

function updateCanvas(canvasObj) {
  return {
    type: "ADD-LINE-TO-CANVAS",
    payload: canvasObj,
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

function changeBgColor(newColor) {
  return {
    type: "CHANGE-BG-COLOR",
    payload: newColor,
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

function handleBgColorChange(newColor) {
  return (dispatch, state) => {
    dispatch(changeBgColor(newColor));
    let canvasObj = state().canvas;
    canvasObj.setBackgroundColor(newColor, canvasObj.renderAll.bind(canvasObj));
    dispatch(realTimeUpdate(canvasObj));
    dispatch(updateCanvas(canvasObj));
  };
}

export {
  handleStrokeWidthChange,
  handleBgColorChange,
  handleStrokeColorChange,
};
