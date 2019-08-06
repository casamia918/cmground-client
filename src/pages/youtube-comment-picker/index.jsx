import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observable } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';
import { FormGroup, ControlGroup, InputGroup, ButtonGroup, Button, AnchorButton } from '@blueprintjs/core'

import UrlForm from './url-form.jsx';
import YoutubeCommentPickerStore from './store';
import PageTitleRenderer from './page-title-renderer.jsx';
import VideoInfo from './video-info.jsx';

import style from './style.module.scss';


@inject('store')
@observer
class YoutubeCommentPickerComponent extends React.Component {

  render() {
    const { store } = this.props;
    console.log('component.this.props', this.props);
    console.log('this.props.store', store);
    // const { commentLoadingState } = store;

    const handleUrlFormLoadButtonClick = () => {

    }

    return (
      <div>
        <div className={style.section}>
          <UrlForm />
        </div>
        <div className={style.section}>
          <VideoInfo />
        </div>
        <div className={style.section + ' ' + style.youtubeContainer}>
          <div className={style.videoInfoContainer}>
            video info
          </div>
          <div className={style.commentContainer}>
            comment data
          </div>
        </div>

      </div>
    );
  }

}




export { YoutubeCommentPickerComponent, PageTitleRenderer, YoutubeCommentPickerStore }