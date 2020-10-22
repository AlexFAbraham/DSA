//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //UncontrolledDropdown,
  //DropdownToggle,
  //DropdownMenu,
  //DropdownItem,
  //NavbarText
} from 'reactstrap';

class Header extends React.Component{
  constructor(props){ 
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <Navbar fixed="top" expand="sm" light>
        <div className="container">
        <NavbarBrand href="/landingpage">{this.props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>

        <Nav className="ml-auto" navbar>
        <NavItem>
              <NavLink href="/">News</NavLink>
            </NavItem>    
          <NavItem>
              <NavLink href="/events">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/domain">Domain Elective</NavLink>
            </NavItem>
            </Nav>
          
          <Nav className="ml-auto" navbar>
            
            <NavItem>
              <NavLink href="">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Sign up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
        
          </Nav>
          
        </Collapse>
        </div>
      </Navbar>

        
    
    );
  }
} 


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
