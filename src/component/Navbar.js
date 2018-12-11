
import React,{Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrollexdDropdown,DropdownToggle,DropdownMenu,DropdownItem}from 'reactstrap';
import './navbar.css'

export default class NavBar extends Component{
    render(){
        return(
            <div>
               <Navbar className="fixed">
                   
                   <NavbarBrand className="mynav" onClick={()=>this.props.changePage("Home")}><img src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc"/>Santren Koding</NavbarBrand>
                   
                   <Nav>
                       <NavItem className ="navbarku" onClick={()=>this.props.changePage("Kajian")} >Kajian Koding</NavItem>
                       <NavItem className = "navbarku" onClick={()=>this.props.changePage("Mondok")}>Mondok Koding</NavItem>
                       <NavItem className="navbarku" onClick={()=>this.props.changePage("Kitab")} >Kitab Koding</NavItem>
                       <button className="mye">masuk/daftar</button>
                   </Nav>
               </Navbar>
            </div>
        );
    }
}
