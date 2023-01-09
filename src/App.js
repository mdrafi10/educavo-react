import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Component/Home/Home";
// import Error from "./Pages/Error";
import { CreateConText } from "./ContextApi/createConText";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <CreateConText>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CreateConText>
  );
}

export default App;
