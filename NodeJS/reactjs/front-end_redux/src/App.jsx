import React from "react";
import MovieNavLinks from "./components/_06_NavLinks";
import { Provider } from "react-redux";
import { moviesStore } from "./reducers/_03_CreateReduxStore";

function App() {
  return (
    <React.Fragment>
      <Provider store={moviesStore}>
        <MovieNavLinks />
      </Provider>
    </React.Fragment>
  );
}

export default App;
