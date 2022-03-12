import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

/* Bad Navigation in React Router */
// 1.) Adding <a> (anchor) tag 
// 2.) Browser issues request to localhost:3000
// 3.) Development server response with index.html
// 4.) Browser receives index.html file, dumps old HTML file it was showing 
// (this includes all React/Redux state data) - this means refresh = wipe (NOT GOOD!!!)
// 5.) index.html lists js files in script tags; browser downloads/executes the scripts
// 6.) App starts */

const PageOne = () => {
  return <div>
      PageOne

      GOOD! Use the Link Tag with the to property.
      <br />
      <Link to="/pagetwo">Page 2</Link>
      </div>;
};

const PageTwo = () => {
  return <div>
      PageTwo
      <br />
      <button>Click Me!</button>
      <br />
      GOOD! Use the Link Tag with the to property.
      <br />
      <Link to="/">Page 1</Link>
      </div>;
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
