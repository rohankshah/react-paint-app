import {
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue,
  update,
} from "firebase/database";
import { random } from "meaningful-string";

function sessionCreateSuccess() {
  return {
    type: "SESSION-CREATE-SUCCESS",
  };
}

function sessionJoinSuccess(data) {
  return {
    type: "SESSION-JOIN-SUCCESS",
    payload: data,
  };
}

function addSessionCode(code) {
  return {
    type: "ADD-SESSION-CODE",
    payload: code,
  };
}

function createNewSession() {
  return (dispatch, state) => {
    dispatch(sessionCreateSuccess());
  };
}

function shareCurrentSession() {
  const code = random({
    min: 6,
    max: 6,
    capsWithNumbers: true,
  });
  return (dispatch, state) => {
    const canvasJson = JSON.stringify(state().canvas.toJSON());
    const db = getDatabase();
    set(ref(db, "collab/" + code), {
      canvas: canvasJson,
    })
      .then(() => dispatch(addSessionCode(code)))
      .then(() => console.log(state().code));
  };
}

function joinSession(code) {
  return (dispatch, state) => {
    console.log(code);
    const db = getDatabase();
    const sessionObj = ref(db, "collab/" + code);
    onValue(sessionObj, (snapshot) => {
      const canvas = snapshot.val();
      if (canvas !== null) {
        const canvasObject = JSON.parse(canvas.canvas);
        dispatch(sessionJoinSuccess({ canvas: canvasObject, code: code }));
      }
    });
  };
}

function realTimeUpdate(obj) {
  return (dispatch, state) => {
    console.log("modified");
  };
}

export { createNewSession, shareCurrentSession, joinSession, realTimeUpdate };
