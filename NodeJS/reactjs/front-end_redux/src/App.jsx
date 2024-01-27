import React from "react";
import MovieNavLinks from "./components/_06_NavLinks";
import { Provider } from "react-redux";
import { newMoviestore } from "./reducers/_03_CreateReduxStore";

function App() {
  return (
    <React.Fragment>
      <Provider store={newMoviestore}>
        <MovieNavLinks />
      </Provider>
    </React.Fragment>
  );
}

export default App;
