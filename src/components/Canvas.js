import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fabric } from "fabric";
import { setCanvasObj } from "../actions/canvas-actions";
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
} from "../actions/line-actions";

function Canvas() {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const canvasWidth = vw * 0.95;
  const canvasHeight = vh * 0.8;

  useEffect(() => {
    let canvas = new fabric.Canvas(canvasRef.current);
    canvas.setDimensions({ height: canvasHeight, width: canvasWidth });
    canvasRef.current.style.border = "2px solid black";
    dispatch(setCanvasObj(canvas));

    // canvas.on("mouse:down", (options) =>
    //   dispatch(handleMouseDown(canvas, options))
    // );

    // canvas.on("mouse:move", (options) => dispatch(handleMouseMove(options)));

    // canvas.on("mouse:up", (options) => dispatch(handleMouseUp()));
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Canvas;
