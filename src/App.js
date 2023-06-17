import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import PaintPage from "./pages/PaintPage";
import SessionPage from "./pages/SessionPage";

function App() {
  const begun = useSelector((state) => state && state.begun);

  return (
    <BrowserRouter>
      <Route exact path="/"></Route>
      {begun ? <Redirect to="/paint" /> : <SessionPage />}
      <Route exact path="/paint">
        {begun ? <PaintPage /> : <Redirect to="/" />}
      </Route>
    </BrowserRouter>
  );
}

export default App;
