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

export { setCanvasObj, setUploadImageToCanvas };
