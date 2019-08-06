import React from "react";
import { observer, inject } from 'mobx-react';
import { FormGroup, ControlGroup, InputGroup, ButtonGroup, Button, AnchorButton } from '@blueprintjs/core'

import style from './style.module.scss';

@inject('store')
@observer
export default class VideoInfo extends React.Component {

  render() {
    const { videoName, videoUrl, comments } = this.props.store;
    const firstComment = comments.length > 0 ? JSON.stringify(comments[0]) : null;
    return (
      <div>
        <div>videoName: {videoName}</div>
        <div>videoUrl: {videoUrl}</div>
        <div>comments num: {comments.length}</div>
        <div>firstComment: {(firstComment)}</div>
      </div>
    )

  }

}