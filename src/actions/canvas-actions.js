import { fabric } from "fabric";
import fileDownload from "js-file-download";
import { realTimeUpdate } from "./session-actions";

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
    canvasObj.on("object:modified", (event) => {
      dispatch(realTimeUpdate(canvasObj));
    });
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
    canvasObj.on("path:created", (event) => {
      dispatch(realTimeUpdate(canvasObj));
    });
    dispatch(updateCanvas(canvasObj));
  };
}

function handleExportCanvas() {
  return (dispatch, state) => {
    let canvasObj = state().canvas;
    let exportedURL = canvasObj.toDataURL({ format: "png" });
    console.log(exportedURL);
    const anchorElement = document.createElement("a");
    anchorElement.download = "react-paint-canvas";
    anchorElement.href = exportedURL;
    anchorElement.type = "image/png";
    anchorElement.click();
    // fileDownload(exportedURL, "react-paint-canvas.png");
  };
}

export {
  setCanvasObj,
  setUploadImageToCanvas,
  handleSelectButton,
  handleFreeDrawButton,
  handleExportCanvas,
};
