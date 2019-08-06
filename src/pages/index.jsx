import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider, observer, inject } from 'mobx-react';

import { isConstructor } from 'lib/helper.js'



import { YoutubeCommentPickerComponent, PageTitleRenderer as YoutubeCommentPickerPageTitleRenderer, YoutubeCommentPickerStore } from './youtube-comment-picker/index.jsx';

import style from './style.module.scss';

class Home extends React.Component {
  render() {
    return (
      <PageContainer title="Home">
        <div>Welcome to casamia's playground.</div>
      </PageContainer>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <PageContainer title="About">
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
      </PageContainer>

    )

  }
}

class YoutubeCommentPicker extends React.Component {
  constructor(props) {
    super(props);
    this.store = new YoutubeCommentPickerStore();
  }
  render() {
    console.log('this.store', this.store);
    return (
      <Provider store={this.store}>
        <PageContainer TitleRenderer={YoutubeCommentPickerPageTitleRenderer} >
          <YoutubeCommentPickerComponent></YoutubeCommentPickerComponent>
        </PageContainer>
      </Provider>
    )
  }
}

class PageContainer extends React.Component {

  render() {
    // (titleRenderOrString, Page, Store)
    const { title, TitleRenderer, children } = this.props;
    // let store = null;
    // if (isConstructor(Store)) {
    //   console.log("store is consructor", Store);
    //   store = new Store();
    // }
    // console.log('store', store);
    // const title = typeof titleRendererOrString === 'function' ? titleRendererOrString() : titleRendererOrString;
    const titleComponent = title ? title : <TitleRenderer />
    return (
      <div className={style.pageContainer}>
        <h1 className={style.pageTitle}>
          {titleComponent}
        </h1>
        <div className={style.pageContent}>
          {children}
        </div>
      </div>
    )
  }

}

export { Home, About, YoutubeCommentPicker };