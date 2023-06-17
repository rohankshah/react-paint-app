import React, { useState } from "react";
import { createNewSession, joinSession } from "../actions/session-actions";
import { useDispatch } from "react-redux";

const styles = {
  pageDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#d3d3d3",
  },

  outerDiv: {
    height: "70vh",
    width: "25vw",
    border: "2px solid black",
    padding: "1em",
    backgroundColor: "#ffffff",
  },

  innerDiv: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  headings: {
    fontSize: "18px",
    marginBottom: "2em",
  },

  inputs: {
    height: "2.5em",
    width: "80%",
    marginBottom: "1em",
    padding: "7px",
    backgroundColor: "#d3d3d3",
    border: "none",
  },

  buttons: {
    height: "2.5em",
    width: "80%",
    marginBottom: "1em",
    backgroundColor: "#d3d3d3",
    border: "none",
    fontSize: "14px",
  },
};

function SessionPage() {
  const dispatch = useDispatch();

  const [createName, setCreateName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [code, setCode] = useState("");

  function handleCreate() {
    dispatch(createNewSession());
  }

  function handleJoin() {
    dispatch(joinSession(code));
  }

  return (
    <div style={styles.pageDiv}>
      <div style={styles.outerDiv}>
        <div style={styles.innerDiv}>
          <p style={styles.headings}>Create Session</p>
          <input
            type="text"
            placeholder="Enter Name"
            style={styles.inputs}
            onChange={(e) => setCreateName(e.target.value)}
          />
          <button style={styles.buttons} onClick={() => handleCreate()}>
            Create
          </button>
        </div>
        <div style={styles.innerDiv}>
          <p style={styles.headings}>Join Session</p>
          <input
            type="text"
            placeholder="Enter Name"
            style={styles.inputs}
            onChange={(e) => setCreateName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Code"
            style={styles.inputs}
            onChange={(e) => setCode(e.target.value)}
          />
          <button style={styles.buttons} onClick={() => handleJoin()}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default SessionPage;
