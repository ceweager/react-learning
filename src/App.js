// import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
// import Pet from './Pet';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import SearchParams from './SearchParams';
import Details from './Details';

// const App = () => {
//   // App is a react component, created using a function. It must be capitalised

//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Henry",
//       animal: "dog",
//       breed: "lab/collie",
//     }),
//     React.createElement(Pet, {
//       name: "Cindy",
//       animal: "dog",
//       breed: "collie/fox terrier",
//     }),
//     React.createElement(Pet, {
//       name: "Hazel",
//       animal: "dog",
//       breed: "mixed breed",
//     }),
//   ]);
// };

const App = () =>{
  return(<div>
    <Router>
      <header>
        <Link to="/">
          <h1>Adopt me!</h1>
        </Link>
      </header>
      <Switch>
        <Route path = "/details/:id">
          <Details />
        </Route>
        <Route path = "">
          < SearchParams />
        </Route>
      </Switch>
    </Router>
  </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root")); //creates app element and where to put it (the root element)
