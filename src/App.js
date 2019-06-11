import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.LANDING} render={() => <div>Landing</div>} />
      <Route exact path={ROUTES.REPORT} render={() => <div>Report</div>} />
      <Route
        exact
        path={ROUTES.CONFIRMATION}
        render={() => <div>Confirmation</div>}
      />
      <Route
        exact
        path={ROUTES.REPORT_TRACKER}
        render={() => <div>Route Tracker</div>}
      />
    </Router>
  );
}

export default App;
