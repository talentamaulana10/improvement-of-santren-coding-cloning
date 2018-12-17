import React,{Component} from 'react'
import './jumbotron.css'
import {Jumbotron,Container,Button} from 'reactstrap';
export default class JumboTron extends Component{
    render(){
        return(
            <div>
                <center>
                <Jumbotron className="dos" fluid>
                    <Container fluid>
                        <h1 className="santren">SANTREN KODING</h1>
                        <p className="santren">Intensive Coding Bootcamp for Yatim & Dhuafa</p>
                        <Button color="success" className="mybutton">Mulai Belajar</Button>{' '}
                    </Container>
                </Jumbotron>
                </center>  
            </div>
        );
    }
}