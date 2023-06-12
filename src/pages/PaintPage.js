import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Canvas from "../components/Canvas";
import {
  handleMakeLineButton,
  handleSelectButton,
  handleFreeDrawButton,
  handleStrokeWidthChange,
  handleStrokeColorChange,
} from "../actions/line-actions";
import { pencilIcon, selectionIcon, lineIcon } from "../svg/allSvg";

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
    height: "3.5em",
    width: "95vw",
    borderLeft: "2px solid black",
    borderRight: "2px solid black",
    borderTop: "2px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0em 1em",
    backgroundColor: "white",
  },

  buttonUnclick: {
    marginRight: "1em",
  },

  buttonClick: {
    // backgroundColor: "#a3a3a3",
    // opacity: "80%",
    marginRight: "1em",
    marginTop: "5px",
    boxShadow: "inset 3px 3px 5px -3px #a3a3a3",
  },

  strokeWidthInput: {
    height: "30px",
    width: "4em",
    marginRight: "1em",
    paddingLeft: "7px",
    border: "1px solid #a3a3a3",
    // backgroundColor: "#a3a3a3",
  },

  colorPicker: {
    height: "28px",
    width: "3em",
    border: "none",
  },
};

function PaintPage() {
  const strokeWidth = useSelector((state) => state && state.strokeWidth);
  const strokeColor = useSelector((state) => state && state.strokeColor);
  const dispatch = useDispatch();

  const [currentStrokeWidth, setCurrentStrokeWidth] = useState(2);
  const [currentStrokeColor, setcurrentStrokeColor] = useState("#000000");

  const [buttonToggle, setButtonToggle] = useState([
    { id: "select", clicked: false },
    { id: "MakeLine", clicked: false },
    { id: "freeDraw", clicked: false },
  ]);

  useEffect(() => {
    strokeWidth && setCurrentStrokeWidth(strokeWidth);
  }, [strokeWidth]);

  useEffect(() => {
    console.log(strokeColor);
    strokeColor && setcurrentStrokeColor(strokeColor);
  }, [strokeColor]);

  function handleButtonClick(e) {
    switch (e.currentTarget.title) {
      case "select":
        dispatch(handleSelectButton());
        break;
      case "MakeLine":
        dispatch(handleMakeLineButton());
        break;
      case "freeDraw":
        dispatch(handleFreeDrawButton());
        break;
      default:
        break;
    }
    const updatedButtons = buttonToggle.map((button) => {
      if (button.id === e.currentTarget.title) {
        return { ...button, clicked: true };
      } else {
        return { ...button, clicked: false };
      }
    });
    setButtonToggle(updatedButtons);
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

  return (
    <div style={styles.mainCont}>
      <div>
        <div style={styles.toolBoxCont}>
          {/* Select button */}
          <div
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

          {/* Free draw button */}
          <div
            onClick={(e) => handleButtonClick(e)}
            style={
              buttonToggle.filter((ele) => ele.id === "freeDraw")[0].clicked
                ? styles.buttonClick
                : styles.buttonUnclick
            }
            title="freeDraw"
          >
            {pencilIcon()}
          </div>

          {/* Make line button */}
          <div
            onClick={(e) => handleButtonClick(e)}
            style={
              buttonToggle.filter((ele) => ele.id === "MakeLine")[0].clicked
                ? styles.buttonClick
                : styles.buttonUnclick
            }
            title="MakeLine"
          >
            {lineIcon()}
          </div>
          <div>
            <input
              type="number"
              style={styles.strokeWidthInput}
              min="1"
              max="50"
              value={currentStrokeWidth}
              onChange={(e) =>
                dispatch(handleStrokeWidthChange(Number(e.target.value)))
              }
            ></input>
          </div>
          <div>
            <input
              type="color"
              style={styles.colorPicker}
              value={currentStrokeColor}
              onChange={(e) =>
                dispatch(handleStrokeColorChange(e.target.value))
              }
            ></input>
          </div>
        </div>
        <Canvas canvasHeight={canvasHeight} canvasWidth={canvasWidth} />
      </div>
    </div>
  );
}

export default PaintPage;
