import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fabric } from "fabric";
import { setCanvasObj } from "../actions/canvas-actions";
import { realTimeUpdate } from "../actions/session-actions";

function Canvas(props) {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  const inviteCanvasObject = useSelector(
    (state) => state && state.inviteCanvasObject
  );

  useEffect(() => {
    let canvas = new fabric.Canvas(canvasRef.current);
    canvas.setBackgroundColor("#ffffff");
    canvas.setDimensions({
      height: props.canvasHeight,
      width: props.canvasWidth,
    });
    canvasRef.current.style.border = "2px solid black";
    if (Object.keys(inviteCanvasObject).length !== 0) {
      canvas.loadFromJSON(inviteCanvasObject, () => {
        canvas.renderAll();
      });
    }
    canvas.on("object:modified", (event) => {
      const modifiedObject = event.target;
      dispatch(realTimeUpdate(modifiedObject));
    });
    dispatch(setCanvasObj(canvas));
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Canvas;
