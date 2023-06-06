import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fabric } from "fabric";
import { setCanvasObj } from "../actions/canvas-actions";

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
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 20,
      height: 20,
    });
    canvas.add(rect);
    canvasRef.current.style.border = "2px solid black";
    dispatch(setCanvasObj(canvas));

    let isDrawing = false;
    let line;
    canvas.on("mouse:down", (options) => {
      const { e } = options;
      const { offsetX, offsetY } = e;
      isDrawing = true;
      line = new fabric.Line([offsetX, offsetY, offsetX, offsetY], {
        stroke: "#9747ff",
        strokeWidth: 10,
      });
      canvas.add(line);
    });

    canvas.on("mouse:move", (options) => {
      if (isDrawing) {
        const { e } = options;
        const { offsetX, offsetY } = e;
        line.set({ x2: offsetX, y2: offsetY });
        line.set({ dirty: true });
        canvas.renderAll();
      }
    });

    canvas.on("mouse:up", (options) => {
      if (isDrawing) {
        isDrawing = false;
        canvas.renderAll();
      }
    });
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Canvas;
