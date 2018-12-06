import React,{Component} from 'react'
import {Jumbotron,Container} from 'reactstrap';
export default class JumboTron extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid>
                <Container fluid>
                <h1>imgmy name is fighan</h1>
                <p>i,m from semarangdc</p>
                <button>mulai belajar</button>
                </Container>
                </Jumbotron>
            </div>
        );
    }
}