import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observable } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';
import { FormGroup, ControlGroup, InputGroup, ButtonGroup, Button, AnchorButton } from '@blueprintjs/core'

import style from './style.module.scss';


@inject('store')
@observer
class UrlForm extends React.Component {

  handleUrlInputChange = (e) => {
    this.props.store.updateVideoUrl(e.target.value);
  }

  handleUrlFormLoadButtonClick = () => {
    this.props.store.fetchComments();
  }

  render() {
    const { store } = this.props;
    // const { commentLoadingState } = store;

    return (
      <ControlGroup className={style.urlFormContainer}>
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
          <InputGroup id="text-input" placeholder="Placeholder text" onChange={this.handleUrlInputChange} />
        </FormGroup>
        <Button
          icon="play"
          className={style.urlFormLoadButton}
          onClick={this.handleUrlFormLoadButtonClick}>
          Load Comment
          </Button>
      </ControlGroup>


    );
  }

}


export default UrlForm
