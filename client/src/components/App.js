import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

/* Bad Navigation
1.) Adding <a> (anchor) tag 
2.) browser issues request to localhost:3000
3.) development server response with index.html
4.) browser receives index.html file, dumps old HTML file it was showing 
(this includes all React/Redux state data
5.) index.html lists js files in script tags; browser downloads/executes the scripts
6.) app starts */

const PageOne = () => {
  return <div>
      PageOne

      BAD! Don't do the below!
      <br />
      <a href="/pagetwo">Page 2</a>
      </div>;
};

const PageTwo = () => {
  return <div>
      PageTwo
      
      BAD! Don't do the below!
      <br />
      <a href="/">Page 1</a>
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
