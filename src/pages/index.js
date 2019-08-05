import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import style from './style.module.scss';

console.log(style);

function HomeComponent() {
  return <div>Welcome to CMGround.</div>;
}

function AboutComponent() {
  return (
    <>
      <div className={style.section}>
        <div>
          Site info
        </div>
        <ul>
          <li> Owner :  <a href="mailto:casamia743@gmail.com">casamia743@gmail.com</a> </li>
          <li> Repository : <a href="https://github.com/casamia918/cmground">https://github.com/casamia918/cmground</a></li>
        </ul>

      </div>
      <div className={style.section}>
        <div>
          Site History
        </div>
        <ul>
          <li>2019. 8. 6. Created (commit id: )</li>
        </ul>
      </div>


    </>
  );
}

function Topic({ match }) {
  return <div>Requested Param: {match.params.id}</div>;
}

function TopicsComponent({ match }) {
  return (
    <div>
      <div>Topics</div>
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

function pageContainer(title, page) {
  return function (props) {
    return (
      <div>
        <h1 className={style.pageTitle}>
          {title}
        </h1>
        <div className={style.pageContainer}>
          {page(props)}
        </div>
      </div>

    )
  }

}

const Home = pageContainer('Home', HomeComponent);
const Topics = pageContainer('Topics', TopicsComponent);
const About = pageContainer('About', AboutComponent);

export { Home, Topics, About };