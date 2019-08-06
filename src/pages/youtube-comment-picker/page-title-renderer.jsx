import React from "react";
import { observer, inject } from 'mobx-react';
import { FormGroup, ControlGroup, InputGroup, ButtonGroup, Button, AnchorButton } from '@blueprintjs/core'

import style from './style.module.scss';

@inject('store')
@observer
export default class PageTitleRenderer extends React.Component {

  render() {
    return (
      <div>
        <span>Youtube Comment Picker</span>
        <ButtonGroup className={style.pageTitleButtonGroup} minimal={true}>
          <Button icon="cog" onClick={this.handleButtonClick}>Settings</Button>
          <Button icon="delete">Delete</Button>
        </ButtonGroup>

      </div>
    )
  }
}