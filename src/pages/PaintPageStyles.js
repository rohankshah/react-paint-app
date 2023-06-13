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
    justifyContent: "space-between",
    padding: "0em 1em",
    backgroundColor: "white",
  },

  innerCont: {
    display: "flex",
    alignItems: "center",
  },

  buttonUnclick: {
    marginRight: "1em",
  },

  buttonClick: {
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
  },

  colorPicker: {
    height: "28px",
    width: "3em",
    border: "none",
    marginRight: "1em",
  },

  bgColorDiv: {
    height: "28px",
    width: "2em",
    marginRight: "1em",
    position: "relative",
    display: "inline-block",
  },

  bgPicker: {
    border: "none",
    marginRight: "1em",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },

  uploadImageInput: {
    opacity: 0,
    display: "none",
  },

  uploadImageLabel: {
    marginRight: "1em",
  },

  exportButton: {
    marginRight: "1em",
  },
};

export { styles };
