import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>PageOne</div>;
};

const PageTwo = () => {
  return <div>PageTwo</div>;
};

// React Router uses extractedPath.contains(path) to determine
// what gets displayed on the page. The exact keyword requires an
// exact match to display on page, whereas omitting it results in both
// PageOne and PageTwo displaying on the page.
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
