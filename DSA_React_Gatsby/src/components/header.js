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

//Imports for Netlify scripts into HTML of static site
export function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called.")
  const script = document.createElement("script");

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true;

  document.body.appendChild(script);
}

function openNetlifyModel(){
  const netlifyIdentity = window.netlifyIdentity;

  if(netlifyIdentity)
  netlifyIdentity.open();
  else
  console.log('netlifyIdentity not defined')
}


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
              
              <NavLink  href="" onClick ={() => {initNetlifyIdentity(); openNetlifyModel()}}>Login</NavLink>
              
             
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
