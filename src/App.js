import React, { Fragment } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
const App = (props) => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
export default App;