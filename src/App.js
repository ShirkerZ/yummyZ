import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Home from "./components/Home";
import Cuisines from "./components/Cuisines";
import Foods from "./components/Foods";
import Details from "./components/Details";

function App() {
  const cardStyle = {
    textDecoration: "none",
  };

  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Form query={query} setQuery={setQuery} setFoods={setFoods} />
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  setFoods={setFoods}
                  query={query}
                  foods={foods}
                  cardStyle={cardStyle}
                />
              )}
            />
            <Foods foods={foods} cardStyle={cardStyle} />
            {/*}
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                meal={mealType}
                setMealType={setMealType}
                setFoods={setFoods}
                foods={foods}
                cardStyle={cardStyle}
              />
            )}
          />
          */}
          </Route>
          <Route path="/cuisine" exact>
            <Form query={query} setQuery={setQuery} setFoods={setFoods} />
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
            <Foods foods={foods} cardStyle={cardStyle} />
          </Route>

          <Route path="/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
