import React from "react";
import Canvas from "../components/Canvas";

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
  return (
    <div style={styles.mainCont}>
      <div style={styles.toolBoxCont}>sss</div>
      <Canvas />
    </div>
  );
}

export default PaintPage;
