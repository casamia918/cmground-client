import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider, observer, inject } from 'mobx-react';

import { isConstructor } from 'lib/helper.js'



import { YoutubeCommentPickerComponent, PageTitleRenderer as YoutubeCommentPickerPageTitleRenderer, YoutubeCommentPickerStore } from './youtube-comment-picker';

import style from './style.module.scss';

function HomeComponent() {
  return <div>Welcome to casamia's playground.</div>;
}

function AboutComponent() {
  return (
    <>
      <div className={style.section}>
        <div className={style.sectionTitle}>
          Site info
        </div>
        <ul>
          <li> Owner :  <a href="mailto:casamia743@gmail.com">casamia743@gmail.com</a> </li>
          <li> Repository : <a href="https://github.com/casamia918/cmground">https://github.com/casamia918/cmground</a></li>
        </ul>

      </div>
      <div className={style.section}>
        <div className={style.sectionTitle}>
          Site History
        </div>
        <ul>
          <li>2019. 8. 6. Created </li>
        </ul>
      </div>
    </>
  );
}


function pageContainer(titleRenderOrString, page, Store) {
  let store = null;
  if (isConstructor(Store)) {
    console.log("store is consructor", Store);
    store = new Store();
  }
  const title = typeof titleRenderOrString === 'function' ? titleRenderOrString() : titleRenderOrString;
  return function (props) {
    return (
      <Provider store={store}>
        <div className={style.pageContainer}>
          <h1 className={style.pageTitle}>
            {title}
          </h1>
          <div className={style.pageContent}>
            {page(props)}
          </div>
        </div>
      </Provider>

    )
  }

}

const Home = pageContainer('Home', HomeComponent);
const About = pageContainer('About', AboutComponent);
const YoutubeCommentPicker = pageContainer(YoutubeCommentPickerPageTitleRenderer, YoutubeCommentPickerComponent, YoutubeCommentPickerStore);

export { Home, About, YoutubeCommentPicker };