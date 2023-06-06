import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Canvas from "../components/Canvas";
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
} from "../actions/line-actions";

const styles = {
  mainCont: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  toolBoxCont: {
    height: "18%",
    width: "95%",
    padding: "1em",
    border: "1px solid black",
  },
};

function PaintPage() {
  const currentCanvasObj = useSelector((state) => state && state.canvas);
  const dispatch = useDispatch();

  const [drawToggle, setDrawToggle] = useState(false);

  useEffect(() => {
    if (Object.keys(currentCanvasObj).length !== 0) {
      if (drawToggle) {
        console.log(currentCanvasObj);
        currentCanvasObj.on("mouse:down", (options) =>
          dispatch(handleMouseDown(currentCanvasObj, options))
        );
        currentCanvasObj.on("mouse:move", (options) =>
          dispatch(handleMouseMove(options))
        );
        currentCanvasObj.on("mouse:up", (options) =>
          dispatch(handleMouseUp(currentCanvasObj, options))
        );
      } else {
        currentCanvasObj.__eventListeners = {};
      }
    }
  }, [drawToggle]);

  return (
    <div style={styles.mainCont}>
      <div style={styles.toolBoxCont}>
        <button onClick={() => setDrawToggle(!drawToggle)}>Draw Line</button>
      </div>
      <Canvas />
    </div>
  );
}

export default PaintPage;
