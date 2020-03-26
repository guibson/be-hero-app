import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./app/Logon";
import Register from "./app/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
