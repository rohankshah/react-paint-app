import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fabric } from "fabric";
import { setCanvasObj } from "../actions/canvas-actions";

function Canvas(props) {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let canvas = new fabric.Canvas(canvasRef.current);
    canvas.setBackgroundColor("#ffffff");
    canvas.setDimensions({
      height: props.canvasHeight,
      width: props.canvasWidth,
    });
    canvasRef.current.style.border = "2px solid black";
    dispatch(setCanvasObj(canvas));
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Canvas;
