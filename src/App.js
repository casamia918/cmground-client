import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';
import { Home, About, Topics } from './pages'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}


export default App;
