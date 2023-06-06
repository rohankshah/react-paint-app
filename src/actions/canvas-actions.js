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

export { setCanvasObj };
