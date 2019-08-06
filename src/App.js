import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header';
import { Home, About, YoutubeCommentPicker } from './pages/index.jsx'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/youtube-comment-picker" component={YoutubeCommentPicker} />
      </div>
    </Router>
  );
}


export default App;
