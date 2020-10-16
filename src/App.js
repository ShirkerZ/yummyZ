import React, { useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cuisines from "./components/Cuisines";
import Details from "./components/Details";

function App() {

  const cardStyle = {
    textDecoration: "none",
  };

  const [foods, setFoods] = useState([]);


  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  setFoods={setFoods}
                  foods={foods}
                  cardStyle={cardStyle}
                />
              )}
            />
            <Route
              path="/cuisine"
              exact
              render={(props) => (
                <Cuisines
                  {...props}
                  setFoods={setFoods}
                  foods={foods}
                  cardStyle={cardStyle}
                />
              )}
            />
            <Route path="/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
