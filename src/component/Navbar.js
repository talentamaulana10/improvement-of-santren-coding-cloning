
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
 
import {Collapse,Navbar,NavLink,Button,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrollexdDropdown,DropdownToggle,DropdownMenu,DropdownItem}from 'reactstrap';
import './navbar.css'

export default class NavBar extends Component{
    render(){
        return(
            <div>
               <Navbar className="fixed" >
               
               <NavbarBrand tag={Link} to="/" className="mynav">
               <img src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc"/>
               Santren Koding
               </NavbarBrand>
                   <Nav>
                   <NavItem>
                       <NavLink tag={Link} to="/Kajian">Kajian Koding</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink tag={Link} to="/Mondok">Kajian Koding</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink tag={Link} to="/Kitab">Kajian Koding</NavLink>
                   </NavItem>
                   <button className="mye">Masuk/Daftar</button>
                   </Nav>
              
               </Navbar>
            </div>
        );
    }
}
