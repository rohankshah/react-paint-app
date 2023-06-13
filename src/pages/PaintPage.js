import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Canvas from "../components/Canvas";
import { styles } from "./PaintPageStyles";
import {
  handleMakeLineButton,
  handleMakeCircleButton,
} from "../actions/shape-actions";
import {
  handleStrokeWidthChange,
  handleStrokeColorChange,
  handleBgColorChange,
} from "../actions/properties-actions";
import {
  handleSelectButton,
  handleFreeDrawButton,
  setUploadImageToCanvas,
} from "../actions/canvas-actions";
import {
  pencilIcon,
  selectionIcon,
  lineIcon,
  bgColorIcon,
  circleIcon,
} from "../svg/allSvg";

function PaintPage() {
  const strokeWidth = useSelector((state) => state && state.strokeWidth);
  const strokeColor = useSelector((state) => state && state.strokeColor);
  const bgColor = useSelector((state) => state && state.bgColor);
  const dispatch = useDispatch();

  const [currentStrokeWidth, setCurrentStrokeWidth] = useState(2);
  const [currentStrokeColor, setcurrentStrokeColor] = useState("#000000");
  const [currentBgColor, setCurrentBgColor] = useState("#ffffff");
  const [uploadedImage, setUploadedImage] = useState();

  const [buttonToggle, setButtonToggle] = useState([
    { id: "select", clicked: false },
    { id: "MakeLine", clicked: false },
    { id: "freeDraw", clicked: false },
    { id: "MakeCircle", clicked: false },
  ]);

  useEffect(() => {
    strokeWidth && setCurrentStrokeWidth(strokeWidth);
  }, [strokeWidth]);

  useEffect(() => {
    strokeColor && setcurrentStrokeColor(strokeColor);
  }, [strokeColor]);

  useEffect(() => {
    bgColor && setCurrentBgColor(bgColor);
  }, [bgColor]);

  useEffect(() => {
    uploadedImage && dispatch(setUploadImageToCanvas(uploadedImage));
  }, [uploadedImage]);

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
      case "MakeCircle":
        dispatch(handleMakeCircleButton());
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

  function handleUploadImage(e) {
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
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

          {/* Make circle button  */}
          <div
            onClick={(e) => handleButtonClick(e)}
            style={
              buttonToggle.filter((ele) => ele.id === "MakeCircle")[0].clicked
                ? styles.buttonClick
                : styles.buttonUnclick
            }
            title="MakeCircle"
          >
            {circleIcon()}
          </div>

          {/* Background color change  */}
          <div style={styles.bgColorDiv}>
            {bgColorIcon()}
            <input
              type="color"
              style={styles.bgPicker}
              value={currentBgColor}
              onChange={(e) => dispatch(handleBgColorChange(e.target.value))}
            ></input>
          </div>

          {/* Stroke width Change */}
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

          {/* Stroke color change  */}
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

          {/* Upload image  */}
          <div>
            <label
              htmlFor="image_uploads"
              title="PNG, JPG, JPEG"
              style={styles.uploadImageLabel}
            >
              Upload
            </label>
            <input
              id="image_uploads"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => handleUploadImage(e)}
              style={styles.uploadImageInput}
            />
          </div>
        </div>
        <Canvas canvasHeight={canvasHeight} canvasWidth={canvasWidth} />
      </div>
    </div>
  );
}

export default PaintPage;
