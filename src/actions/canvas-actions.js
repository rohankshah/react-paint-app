import { fabric } from "fabric";

function setCanvasSuccess(canvasObj) {
  return {
    type: "SET-CANVAS-SUCCESS",
    payload: canvasObj,
  };
}

function setCanvasObj(canvasObj) {
  return (dispatch) => {
    dispatch(setCanvasSuccess(canvasObj));
  };
}

function updateCanvas(canvasObj) {
  return {
    type: "ADD-LINE-TO-CANVAS",
    payload: canvasObj,
  };
}

function setUploadImageToCanvas(fileURL) {
  return (dispatch, state) => {
    let canvasObj = state().canvas;
    fabric.Image.fromURL(fileURL, function (img) {
      canvasObj.add(img);
    });
    dispatch(updateCanvas(canvasObj));
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
    let canvasObj = state().canvas;
    canvasObj.__eventListeners = {};
    canvasObj._setOptions({ selection: false });
    canvasObj._setOptions({ isDrawingMode: true });
    canvasObj.freeDrawingBrush.color = state().strokeColor;
    canvasObj.freeDrawingBrush.width = state().strokeWidth;
    dispatch(updateCanvas(canvasObj));
  };
}

export {
  setCanvasObj,
  setUploadImageToCanvas,
  handleSelectButton,
  handleFreeDrawButton,
};
