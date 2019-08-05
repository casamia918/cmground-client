import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import style from './style.scss';

console.log(style);

function HomeComponent() {
  return <h2>Welcome to CMGround.</h2>;
}

function AboutComponent() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function TopicsComponent({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function pageContainer(page) {
  return function (props) {
    return (
      <div className={style.pageContainer}>
        {page(props)}
      </div>
    )
  }

}

const Home = pageContainer(HomeComponent);
const Topics = pageContainer(TopicsComponent);
const About = pageContainer(AboutComponent);

export { Home, Topics, About };