import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import store from "./redux";
import Board from "./components/Board";
import Diceroll from "./components/Diceroll";
import Player from "./components/Player";
import Resources from "./components/Resources";

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <main>
                    <Player />
                    <Diceroll />
                    <Resources />
                    <Board />
                  </main>
                )}
              />
              <Redirect />
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
