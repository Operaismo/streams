import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

/* Bad Navigation in React Router */
// 1.) Adding <a> (anchor) tag 
// 2.) Browser issues request to localhost:3000
// 3.) Development server response with index.html
// 4.) Browser receives index.html file, dumps old HTML file it was showing 
// (this includes all React/Redux state data) - this means refresh = wipe (NOT GOOD!!!)
// 5.) index.html lists js files in script tags; browser downloads/executes the scripts
// 6.) App starts 

/* Best Practices for Navigation: */
// 1.) User wants to navigate to another page in the App.
// 2.) User clicks a Link tag.
// 3.) React Router prevents browser from navigating to the new page and fetching new index.html.
// 4.) URL still changes.
// 5.) 'History' shows updated URL, takes URL, and sents it to BrowserRouter.
// 6.) BrowserRouter communicates the URL to Route components. 

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
      <HashRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </HashRouter>
    </div>
  );
};

export default App;
