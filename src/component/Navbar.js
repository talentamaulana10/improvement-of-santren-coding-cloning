import React,{Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrollexdDropdown,DropdownToggle,DropdownMenu,DropdownItem}from 'reactstrap';
export default class NavBar extends Component{
    render(){
        return(
            <div>
               <Navbar>
                   <NavbarBrand>Santren Koding</NavbarBrand>
                   <Nav>
                       <NavItem>Kajian Koding</NavItem>
                       <NavItem>Mondok Koding</NavItem>
                       <NavItem>Kitab Koding</NavItem>
                   </Nav>
               </Navbar>
            </div>
        );
    }
}
