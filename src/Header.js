import React from "react";
import { Link } from "react-router-dom";

import { Navbar, NavbarGroup, NavbarHeading, Alignment, Button } from '@blueprintjs/core'

export default function Header() {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>CMGround</NavbarHeading>
        <Navbar.Divider />
        <Link to="/"><Button className="bp3-minimal" icon="home" text="Home" /></Link>
        <Link to="/about"><Button className="bp3-minimal" icon="help" text="About" /></Link>
        <Link to="/youtube-comment-picker"><Button className="bp3-minimal" icon="mobile-video" text="Youtube Comment Picker" /></Link>
      </NavbarGroup>
    </Navbar>
  );
}
