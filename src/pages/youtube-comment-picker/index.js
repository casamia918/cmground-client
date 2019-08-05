import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider, observer, inject } from 'mobx-react';
import { FormGroup, ControlGroup, InputGroup, ButtonGroup, Button, AnchorButton } from '@blueprintjs/core'

import style from './style.module.scss';



export function YoutubeCommentPickerComponent() {
  return (
    <Provider>
      <div>
        <ControlGroup className={style.section + ' ' + style.urlFormContainer}>
          <FormGroup
            className={style.urlFormGroup}
            helperText={
              <div>
                Enter a youtube video url containing your video id. <br />
                Ex: https://www.youtube.com/watch?v=sh4K3bzH9AQ or https://youtu.be/sh4K3bzH9AQ
              </div>
            }
            label="Enter youtube video URL"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" placeholder="Placeholder text" />
          </FormGroup>
          <Button icon="play" className={style.urlFormLoadButton}>Load Comment</Button>
        </ControlGroup>
        
        <div className={style.section + ' ' + style.youtubeContainer}>
            <div className={style.videoInfoContainer}>
            </div>
            <div className={style.commentContainer}>

            </div>
        </div>

      </div>

    </Provider>

  );
}


export function PageTitleRenderer() {
  const handlePageTitleSettingButtonClick = () => {

  }

  return (
    <div>
      <span>Youtube Comment Picker</span>
      <ButtonGroup className={style.pageTitleButtonGroup} minimal={true}>
        <Button icon="cog">Settings</Button>
        <Button icon="delete">Delete</Button>
      </ButtonGroup>
      
    </div>
  )
}

export class YoutubeCommentPickerStore {

}