import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Canvas from "../components/Canvas";
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
} from "../actions/line-actions";
import { pencilIcon, selectionIcon } from "../svg/allSvg";

const styles = {
  mainCont: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
  },

  toolBoxCont: {
    height: "3em",
    width: "95vw",
    borderLeft: "2px solid black",
    borderRight: "2px solid black",
    borderTop: "2px solid black",
    display: "flex",
    alignItems: "center",
    padding: "0em 1em",
    backgroundColor: "white",
  },

  buttonUnclick: {
    backgroundColor: "#a3a3a3",
    marginRight: "1em",
  },

  buttonClick: {
    backgroundColor: "#5a5a5a",
    marginRight: "1em",
  },
};

function PaintPage() {
  const currentCanvasObj = useSelector((state) => state && state.canvas);
  const dispatch = useDispatch();

  const [drawToggle, setDrawToggle] = useState(false);
  const [buttonToggle, setButtonToggle] = useState([
    { id: "select", clicked: false },
    { id: "edit", clicked: false },
  ]);

  function handleButtonClick(e) {
    switch (e.currentTarget.title) {
      case "select":
        console.log("select button pressed");
        break;
      case "edit":
        console.log("edit button pressed");
        break;
      default:
        break;
    }
    const updatedButtons = buttonToggle.map((button) => {
      if (button.id === e.currentTarget.title) {
        return { ...button, clicked: true };
      }
      return { ...button, clicked: false };
    });

    setButtonToggle(updatedButtons);
  }

  function handleEditButton() {
    currentCanvasObj._setOptions({ selection: false });
    currentCanvasObj.on("mouse:down", (options) =>
      dispatch(handleMouseDown(currentCanvasObj, options))
    );
    currentCanvasObj.on("mouse:move", (options) =>
      dispatch(handleMouseMove(options))
    );
    currentCanvasObj.on("mouse:up", (options) =>
      dispatch(handleMouseUp(currentCanvasObj, options))
    );
  }

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
    if (Object.keys(currentCanvasObj).length !== 0) {
      if (drawToggle) {
        currentCanvasObj._setOptions({ selection: false });
        currentCanvasObj.on("mouse:down", (options) =>
          dispatch(handleMouseDown(currentCanvasObj, options))
        );
        currentCanvasObj.on("mouse:move", (options) =>
          dispatch(handleMouseMove(options))
        );
        currentCanvasObj.on("mouse:up", (options) =>
          dispatch(handleMouseUp(currentCanvasObj, options))
        );
      } else if (!drawToggle) {
        currentCanvasObj._setOptions({ selection: true });
        currentCanvasObj.__eventListeners = {};
      }
    }
  }, [drawToggle]);

  return (
    <div style={styles.mainCont}>
      <div>
        <div style={styles.toolBoxCont}>
          <div
            // onClick={() => setDrawToggle(false)}
            // style={drawToggle ? styles.buttonUnclick : styles.buttonClick}
            onClick={(e) => handleButtonClick(e)}
            style={
              buttonToggle.filter((ele) => ele.id === "select")[0].clicked
                ? styles.buttonClick
                : styles.buttonUnclick
            }
            title="select"
          >
            {selectionIcon()}
          </div>
          <div
            // onClick={() => setDrawToggle(!drawToggle)}
            // style={drawToggle ? styles.buttonClick : styles.buttonUnclick}
            onClick={(e) => handleButtonClick(e)}
            style={
              buttonToggle.filter((ele) => ele.id === "edit")[0].clicked
                ? styles.buttonClick
                : styles.buttonUnclick
            }
            title="edit"
          >
            {pencilIcon()}
          </div>
        </div>
        <Canvas canvasHeight={canvasHeight} canvasWidth={canvasWidth} />
      </div>
    </div>
  );
}

export default PaintPage;
