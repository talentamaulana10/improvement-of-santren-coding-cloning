import React,{Component} from 'react'
import {Jumbotron,Container} from 'reactstrap';
export default class JumboTron extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid>
                <Container fluid>
                <h1>my name is fighan</h1>
                <p>i,m from semarang</p>
                </Container>
                </Jumbotron>
            </div>
        );
    }
}