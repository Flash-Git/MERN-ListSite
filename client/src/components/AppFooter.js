import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppFooter extends Component{
  render() {
    return(
      <div className="footer-nav">  
        <Navbar color="dark">
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/flash-git">Github</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Support</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppFooter;