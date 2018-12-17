import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="sm" className="mn-5 fixed-top">
        <Container>
          <NavbarBrand href="/">List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/flash-git">Github</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com/FlashyQpt">Twitter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://reddit.com/u/FlashyQpt">Reddit</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavbar;